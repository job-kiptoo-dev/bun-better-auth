import { db } from "@/db/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { Pool } from "pg";
import { openAPI } from "better-auth/plugins"

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg"
  }),
  plugins: [
    openAPI(),
  ],
  emailAndPassword: {
    enabled: true,
  }
});
