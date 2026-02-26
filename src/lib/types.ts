import { todo } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";
import { auth } from "./auth";


export type Todo = InferSelectModel<typeof todo>
export type NewTodo = InferSelectModel<typeof todo>


export type HonoEnv =
  {
    Variables: {
      user: typeof auth.$Infer.Session.user | null;
      session: typeof auth.$Infer.Session.session | null
    }
  }
