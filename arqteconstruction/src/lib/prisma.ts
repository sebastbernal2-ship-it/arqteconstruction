import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

let connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("DATABASE_URL is not set.");
}

// Vercel env var may be set to the Transaction pooler URL (port 6543, pgbouncer=true).
// pg.Pool needs the Session pooler (port 5432, no pgbouncer) for persistent connections.
// Auto-fix: swap port 6543 → 5432 and strip pgbouncer=true so it works regardless
// of which URL the user pasted into Vercel's environment variables.
connectionString = connectionString
    .replace(/:6543\//, ":5432/")
    .replace(/[&?]pgbouncer=true/gi, "")
    .replace(/[&?]connection_limit=\d+/gi, "");

// Ensure sslmode=require is present
if (!connectionString.includes("sslmode=")) {
    connectionString += connectionString.includes("?") ? "&sslmode=require" : "?sslmode=require";
}

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
    pool: Pool | undefined;
};

if (!globalForPrisma.pool) {
    globalForPrisma.pool = new Pool({
        connectionString,
        ssl: { rejectUnauthorized: false },
        max: 3,
        connectionTimeoutMillis: 15000,
        idleTimeoutMillis: 30000,
        allowExitOnIdle: true,
    });
}

const adapter = new PrismaPg(globalForPrisma.pool);

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        adapter,
        log:
            process.env.NODE_ENV === "development"
                ? ["query", "warn", "error"]
                : ["error"],
    });

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}
