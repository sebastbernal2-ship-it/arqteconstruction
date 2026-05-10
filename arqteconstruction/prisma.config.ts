import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Use DATABASE_URL for both CLI and runtime — must be the session/direct URL (port 5432)
    // not the transaction pooler (port 6543) for migrations.
    // On Vercel, set DATABASE_URL to the Supabase Transaction pooler (port 6543).
    url: env("DATABASE_URL"),
  },
});
