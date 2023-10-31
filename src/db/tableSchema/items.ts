import { relations } from "drizzle-orm";
import { sqliteTable, blob, text, int } from "drizzle-orm/sqlite-core";
import { brands } from "./brands";

export const items = sqliteTable("items", {
  id: text("id").primaryKey(),
  brandID: int("brandID"),
  name: text("name").notNull(),
  shortDescription: text("short_description").notNull(),
  longDescription: text("long_description"),
  images: blob("images", { mode: "buffer" }),
  price: int("prince").notNull(),
  discount: int("discount"),
  stock: int("stock").default(0),
  featured: int("featured", { mode: "boolean" }),
  createdAt: int("created_at", { mode: "timestamp" }),
});

export const itemsRelations = relations(items, ({ one }) => ({
  brand: one(brands, {
    fields: [items.brandID],
    references: [brands.id],
  }),
}));
