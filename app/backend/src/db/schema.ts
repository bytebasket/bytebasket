import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";
import { boolean } from "drizzle-orm/mysql-core";

export const usersTable = sqliteTable("users", {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  email: text().notNull().unique(),
  password: text(),
});

export const shoppingListItemsTable = sqliteTable("shopping_list_items", {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  bought: integer({ mode: "boolean" }),
  quantity: integer().notNull(),
  section: text().notNull(),
  owner: integer().references(() => usersTable.id),
});

export const pantryItemsTable = sqliteTable("pantry_items", {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull().unique(),
  quantity: integer().notNull(),
  expriation: text("timestamp")
    .notNull()
    .default(sql`(current_timestamp)`),
  owner: integer().references(() => usersTable.id),
});
