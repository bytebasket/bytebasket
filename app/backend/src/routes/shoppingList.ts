import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { db } from "../db";
import * as schema from "../db/schema";
import { eq, and } from "drizzle-orm";

const shoppingListItemSchema = z.object({
  name: z.string().min(2).max(50),
  quantity: z.number().int().min(1),
  section: z.string().min(2).max(50),
});

export const shoppingListRoutes = new Hono()
  .get("/users/:id{[0-9]+/shopping-list", async (c) => {
    const owner = Number(c.req.param("id"));

    const shoppingList = await db
      .select({
        id: schema.shoppingListItemsTable.id,
        name: schema.shoppingListItemsTable.name,
        bought: schema.shoppingListItemsTable.bought,
        quantity: schema.shoppingListItemsTable.quantity,
        section: schema.shoppingListItemsTable.section,
      })
      .from(schema.shoppingListItemsTable)
      .where(eq(schema.shoppingListItemsTable.owner, owner));

    return c.json(shoppingList);
  })
  .post(
    "/users/:id{[0-9]+/shopping-list",
    zValidator("json", shoppingListItemSchema),
    async (c) => {
      const owner = Number(c.req.param("id"));
      const shoppingListItem = await c.req.valid("json");

      await db
        .insert(schema.shoppingListItemsTable)
        .values({
          name: shoppingListItem.name,
          bought: false,
          quantity: shoppingListItem.quantity,
          section: shoppingListItem.section,
          owner: owner,
        })
        .execute();
    }
  )
  .delete(
    "/users/:id{[0-9]+/shopping-list/:id{[0-9]+}/items/:itemId{[0-9]+}",
    async (c) => {
      const owner = Number(c.req.param("id"));
      const itemId = Number(c.req.param("itemId"));

      await db
        .delete(schema.shoppingListItemsTable)
        .where(
          and(
            eq(schema.shoppingListItemsTable.owner, owner),
            eq(schema.shoppingListItemsTable.id, itemId)
          )
        );
    }
  )
  .put(
    "/:id{[0-9]+}/items/:itemId{[0-9]+}",
    zValidator("json", shoppingListItemSchema),
    async (c) => {
      const owner = Number(c.req.param("id"));
      const itemId = Number(c.req.param("itemId"));

      const shoppingListItem = await c.req.valid("json");

      const result = await db
        .update(schema.shoppingListItemsTable)
        .set({
          name: shoppingListItem.name,
          quantity: shoppingListItem.quantity,
          section: shoppingListItem.section,
        })
        .where(
          and(
            eq(schema.shoppingListItemsTable.owner, owner),
            eq(schema.shoppingListItemsTable.id, itemId)
          )
        )
        .execute();

      if (!result) {
        return c.json({ error: "Item not found" }, 404);
      }

      return c.json({ message: "Item updated successfully" });
    }
  );

// Change the export name to indicate it's a subroute
export const shoppingListSubRoutes = shoppingListRoutes;
