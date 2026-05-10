import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("DATABASE_URL is not set.");
}

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
    pool: Pool | undefined;
};

// Reuse pool across hot-reloads in dev and across invocations in serverless.
// Without this, every serverless cold-start creates a new pool and hangs
// waiting for a connection that never times out.
if (!globalForPrisma.pool) {
    globalForPrisma.pool = new Pool({
        connectionString,
        ssl: { rejectUnauthorized: false },
        max: 1,                        // pgBouncer transaction mode: 1 connection per function instance
        connectionTimeoutMillis: 10000, // fail fast after 10s instead of hanging forever
        idleTimeoutMillis: 30000,       // release idle connections after 30s
        allowExitOnIdle: true,          // don't block serverless function shutdown
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
