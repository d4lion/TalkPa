import http from "http"
import cors from "cors"
import morgan from "morgan"
import express from "express"
import { PORT, url } from "./config.js"
import { Server as SocketServer } from "socket.io"

const app = express()
const server = http.createServer(app)

const io = new SocketServer(server, {
  cors: {
    origin: `${url}`,
  },
})

app.use(cors())
app.use(morgan("dev"))

io.on("connection", (socket) => {
  console.log("User connected: ", socket.id)

  socket.on("message", (message) => {
    socket.broadcast.emit("message", {
      content: message,
      user: socket.id,
    })
  })
})

server.listen(PORT, () => {
  console.log("Server runnin on IP:", url)
})
