import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("DATABASE_URL is not set.");
}

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

// In Prisma 7, the adapter is the sole connection source at runtime.
// The schema.prisma datasource block has no url — prisma.config.ts handles
// CLI/migrations, and the adapter here handles runtime queries.
const adapter = new PrismaPg(connectionString);

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
