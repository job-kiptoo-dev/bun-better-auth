import { getTodosByUserId, insertTodo } from "@/db/queries";
import { HonoEnv } from "@/lib/types";
import { authMiddleware } from "@/middleware/auth.middleware";
import { createTodoValidator } from "@/validator/create-todo.validator";
import { Hono } from "hono";


//assuaring we know  we have  users so ill add this type
export const todos = new Hono<HonoEnv>()

//initialize the  auth middleware 


todos.use(authMiddleware)

todos.get("/", async (c) => {
  const user = c.get("user");
  try {

    const todoList = await getTodosByUserId(user.id)
    return c.json(todoList)
  } catch (error) {
    console.error("Error fetching todos:", error);
    return c.json({ error: "Failed to fetch todos" }, 500);

  }
})


todos.post("/", createTodoValidator, async (c) => {
  //create a new todo tied to the user

  const user = c.get("user");

  const todoData = c.req.valid("json");

  try {
    const newTodo = await insertTodo({ ...todoData, userId: user.id })
    return c.json(newTodo, 201);
  } catch (error) {
    console.error("Error creating todo:", error);
    return c.json({ error: "Failed to create todo" }, 500);
  }
  //will add this later

})

