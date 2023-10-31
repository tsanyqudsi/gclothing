import { text, sqliteTable, blob, int } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { items } from "./items";

export const brands = sqliteTable("brands", {
  id: text("id").primaryKey(),
  name: text("name"),
  image: blob("image"),
  createdAt: int("created_at", { mode: "timestamp" }),
});

export const brandsRelation = relations(brands, ({ many }) => ({
  items: many(items),
}));
