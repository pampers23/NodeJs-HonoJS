import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/api/hello', (c) => {
  return c.text('Hello World!')
})

app.get('/api/users', (c) => {
  return c.json(
    [
      { id: 1, name: "Dexter" },
      { id: 2, name: "Lance" }
    ]
  )
})

const port = 9000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
