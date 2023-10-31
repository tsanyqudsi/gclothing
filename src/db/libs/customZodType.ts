import { createUniqueFieldSchema } from "@ts-react/form";
import { z } from "zod";

const MAX_FILE_SIZE = 50000;

export const FileSchema = createUniqueFieldSchema(
	z
		.any()
		.refine((value) => !!value && !!value.file, "Upload a file is required.")
		.refine(
			(value) => value?.file?.size <= MAX_FILE_SIZE,
			`Max file size is 5MB.`
		),
	"imageFormSchema"
);
