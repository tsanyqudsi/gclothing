import type { Config } from "drizzle-kit";

if (!process.env.DB_URL)
  throw new Error("DB_URL Does not exist in environment file.");

export default {
  schema: "./src/tableSchema",
  out: ".drizzle",
  driver: "better-sqlite",
  strict: true,
  dbCredentials: {
    url: process.env.DB_URL,
  },
} satisfies Config;
