import { createInsertSchema } from "drizzle-zod";
import { items } from "../tables/items";
import { fields } from "../libs/ommitedFields";
import { FileSchema } from "../libs/customZodType";

export const itemSchema = createInsertSchema(items, {
	name: (fields) => fields.name.describe("Nama Produk // Masukan Nama Produk."),
	shortDescription: (fields) =>
		fields.shortDescription.describe(
			"Deskripsi Singkat // Masukan Deskripsi Singkat."
		),
	longDescription: (fields) =>
		fields.longDescription.describe(
			"Deskripsi Lengkap // Masukan Deskripsi Lengkap."
		),
	images: FileSchema.describe("Gambar Produk // Masukan Gambar Produk."),
	price: (fields) => fields.price.describe("Harga // Masukan Harga Produk."),
	discount: (fields) => fields.discount.describe("Diskon // Masukan Diskon"),
	stock: (fields) =>
		fields.stock.describe("Stok Produk // Masukan stok produk."),
	featured: (fields) => fields.featured.describe("Highlight produk."),
}).omit(fields);
