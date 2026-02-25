import { Hono } from 'hono'
import { auth } from './lib/auth'

const app = new Hono()

app
  .on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw))
  .get('/', (c) => {
    return c.text('Hello Hono!')
  })

app.get('/:id', (c) => {
  const id = c.req.param('id')
  return c.json({
    'your id is': id
  })
})

export default app
