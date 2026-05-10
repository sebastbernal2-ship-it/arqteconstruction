import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

let connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("DATABASE_URL is not set.");
}

// Normalize the URL:
// 1. Swap transaction pooler port 6543 -> session pooler port 5432
// 2. Strip pgbouncer=true (not compatible with pg.Pool session mode)
// 3. Strip connection_limit param
// 4. Strip sslmode from URL entirely — we handle SSL in the Pool config below
//    to avoid conflicts between URL-level sslmode and the ssl object.
connectionString = connectionString
    .replace(/:6543\//, ":5432/")
    .replace(/[&?]pgbouncer=true/gi, "")
    .replace(/[&?]connection_limit=\d+/gi, "")
    .replace(/[&?]sslmode=[^&]*/gi, "");

// Clean up any trailing ? or & left after stripping params
connectionString = connectionString.replace(/\?&/, "?").replace(/[?&]$/, "");

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
    pool: Pool | undefined;
};

if (!globalForPrisma.pool) {
    globalForPrisma.pool = new Pool({
        connectionString,
        // Handle SSL entirely here, not in the URL.
        // Supabase uses a self-signed cert chain so we must disable verification.
        ssl: {
            rejectUnauthorized: false,
        },
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
