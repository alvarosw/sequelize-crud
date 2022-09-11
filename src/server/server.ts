import { Server, IncomingMessage, ServerResponse } from 'http'
import routes from '../api/routes'
import express from 'express'
const app = express()

const port = process.env.PORT
const apiVersion = process.env.API_VERSION

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(`/api/${apiVersion}`, routes)

let server: Server<typeof IncomingMessage, typeof ServerResponse>

export function start() {
  if (!server) server = app.listen(port)

  console.debug(`
    Server is up running on port ${port}
      - App url: http://localhost:${port}/api/${apiVersion}
  `)
}

export function stop() {
  if (server.listening) server.close()
}
