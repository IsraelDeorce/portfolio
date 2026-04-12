import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distPath = path.resolve(__dirname, '../dist')
const port = Number(process.env.PORT) || 3000

const app = express()

app.use(express.static(distPath))

app.get('/{*path}', (_request, response) => {
  response.sendFile(path.join(distPath, 'index.html'))
})

app.listen(port, () => {
  console.log(`Portfolio server listening at http://localhost:${port}`)
})
