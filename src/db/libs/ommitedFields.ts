export const fieldMap = [
	"id",
	"createdAt",
	"deletedAt",
	"updatedAt",
	"created-at",
	"deleted-at",
	"updated-at",
	"created_at",
	"deleted_at",
	"updated_at",
];

export const fields = Object.fromEntries(
	Array.from(fieldMap, (element) => [element, true])
);
