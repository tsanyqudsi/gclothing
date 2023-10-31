import type { Config } from "drizzle-kit";
import "dotenv/config";

if (!process.env.DATABASE_HOST) {
	throw new Error("DATABASE_HOST is missing");
}

if (!process.env.DATABASE_USERNAME) {
	throw new Error("DATABASE_USERNAME is missing");
}

if (!process.env.DATABASE_PASSWORD) {
	throw new Error("DATABASE_PASSWORD is missing");
}

if (!process.env.DATABASE_NAME) {
	throw new Error("DATABASE_PASSWORD is missing");
}

const connectionString = `mysql://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}`;

export default {
	schema: "./src/tables",
	out: ".drizzle",
	driver: "pg",
	strict: true,
	dbCredentials: {
		connectionString,
	},
} satisfies Config;
