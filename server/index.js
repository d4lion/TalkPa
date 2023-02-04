import http from "http"
import cors from "cors"
import morgan from "morgan"
import express from "express"
import { PORT } from "./config.js"
import { Server as SocketServer } from "socket.io"

const app = express()
const server = http.createServer(app)
const io = new SocketServer(server, {
  cors: {
    origin: "http://localhost:5173",
  },
})

app.use(cors())
app.use(morgan("dev"))

io.on("connection", (socket) => {
  console.log("User connected: ", socket.id)
  socket.broadcast.emit("userConnected", socket.id)

  socket.on("message", (message) => {
    socket.broadcast.emit("message", {
      content: message,
      user: socket.id,
    })
  })
})

server.listen(PORT)
