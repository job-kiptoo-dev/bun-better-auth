import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/:id', (c) => {
  const id = c.req.param('id')
  return c.json({
    'your id is': id
  })
})

export default app
