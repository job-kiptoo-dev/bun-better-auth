import { todos } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";
import { auth } from "./auth";


export type Todo = InferSelectModel<typeof todos>
export type NewTodo = InferSelectModel<typeof todos>


export type HonoEnv =
  {
    Variables: {
      user: typeof auth.$Infer.Session.user;
      session: typeof auth.$Infer.Session.session
    }
  }
