import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const rawUrl = process.env.DATABASE_URL;

if (!rawUrl) {
    throw new Error("DATABASE_URL is not set.");
}

// Parse the URL properly instead of regex-replacing strings.
// This avoids accidentally corrupting the username (postgres.PROJECT-REF).
const parsed = new URL(rawUrl);

// Session pooler needs port 5432 — swap if transaction pooler port 6543 was set.
if (parsed.port === "6543") {
    parsed.port = "5432";
}

// Remove pgbouncer and connection_limit params — not compatible with pg.Pool.
parsed.searchParams.delete("pgbouncer");
parsed.searchParams.delete("connection_limit");
// Remove sslmode from URL — handled by Pool ssl config below to avoid cert conflicts.
parsed.searchParams.delete("sslmode");

const connectionString = parsed.toString();

// Export debug info (no password) so the error handler can surface it.
export const dbDebugInfo = `host=${parsed.hostname}:${parsed.port} user=${parsed.username}`;

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
