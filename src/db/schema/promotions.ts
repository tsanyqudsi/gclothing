import { text, sqliteTable, int } from "drizzle-orm/sqlite-core";

export const promotions = sqliteTable("promotions", {
	id: text("id").primaryKey(),
	image: text("source"),
	createdAt: int("created_at", { mode: 'timestamp'}),
	link: text("link"),
});
