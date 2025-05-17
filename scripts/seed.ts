import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { eq } from "drizzle-orm";
import { user as usersTable } from "../src/db/auth-schema";

const db = drizzle(process.env.DATABASE_URL!);
async function main() {
  const user: typeof usersTable.$inferInsert = {
    id: "id1",
    name: "John",
    email: "john@example.com",
    emailVerified: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  await db.insert(usersTable).values(user);
  console.log("New user created!");
  const users = await db.select().from(usersTable);
  console.log("Getting all users from the database: ", users);
  /*
  const users: {
    id: number;
    name: string;
    email: string;
  }[]
  */
  await db
    .update(usersTable)
    .set({
      name: "Johnney",
    })
    .where(eq(usersTable.email, user.email));
  console.log("User info updated!");
  await db.delete(usersTable).where(eq(usersTable.email, user.email));
  console.log("User deleted!");
}
main();
