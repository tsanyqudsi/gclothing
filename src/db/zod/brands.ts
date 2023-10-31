import { createInsertSchema } from "drizzle-zod";
import { brands } from "../tables/brands";
import { fields } from "../libs/ommitedFields";
import { FileSchema } from "../libs/customZodType";

export const brandSchema = createInsertSchema(brands, {
	name: (field) => field.name.describe("Nama // Masukan nama merk."),
	image: () =>
		FileSchema.describe("Gambar Merk // Drop berkas gambar di sini."),
}).omit(fields);
