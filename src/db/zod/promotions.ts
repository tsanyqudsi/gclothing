import { createInsertSchema } from "drizzle-zod";
import { promotions } from "../tables/promotions";
import { fields } from "../libs/ommitedFields";
import { FileSchema } from "../libs/customZodType";

export const promotionSchema = createInsertSchema(promotions, {
	image: FileSchema.describe("Gambar Promosi // Masukan gambar promosi."),
	link: (fields) => fields.link.describe("URL Promosi"),
}).omit(fields);
