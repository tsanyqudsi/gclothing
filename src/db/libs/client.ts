import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { brands, items, promotions } from "../tableSchema";

const client = createClient({
  url: "DATABASE_URL",
  authToken: "DATABASE_AUTH_TOKEN",
});

export const dbClient = drizzle(client, {
  schema: { ...brands, ...items, ...promotions },
});
