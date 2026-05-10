import "dotenv/config";
import { defineConfig } from "prisma/config";

// Support both local dev (DATABASE_URL) and Supabase Vercel integration (POSTGRES_URL_NON_POOLING).
// prisma generate only needs to read the schema — it doesn't actually connect.
// We provide a fallback empty string so generate never throws during postinstall.
const migrationUrl =
    process.env.POSTGRES_URL_NON_POOLING ??
    process.env.DATABASE_URL ??
    "postgresql://localhost:5432/placeholder";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: migrationUrl,
  },
});
