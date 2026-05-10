import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

// Supabase Vercel integration sets these automatically.
// POSTGRES_URL_NON_POOLING = direct connection, no pgBouncer — best for pg.Pool + Prisma adapter.
// Fall back to DATABASE_URL for local dev with a custom .env.
const rawUrl =
    process.env.POSTGRES_URL_NON_POOLING ??
    process.env.DATABASE_URL;

if (!rawUrl) {
    throw new Error("No database URL found. Set POSTGRES_URL_NON_POOLING or DATABASE_URL.");
}

const parsed = new URL(rawUrl);
// Strip any pooler/SSL params from the URL — handled by Pool config below.
parsed.searchParams.delete("pgbouncer");
parsed.searchParams.delete("connection_limit");
parsed.searchParams.delete("sslmode");
const connectionString = parsed.toString();

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
