import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "@/db/auth-schema";

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL not found!");
  process.exit(-1);
}

export const db = drizzle(process.env.DATABASE_URL, { schema });
