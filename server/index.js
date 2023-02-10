import http from "http"
import cors from "cors"
import morgan from "morgan"
import express from "express"
import { PORT, url } from "./config.js"
import { Server as SocketServer } from "socket.io"
import moment from "moment"

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
  const userAgent = socket.request.headers["user-agent"]
    .split("(")[1]
    .split(" ")[0]
    .replace(";", "")

  const timeNow = moment().format("hh:mm:ss")

  console.log(`${timeNow}: ${socket.id} connected on ${userAgent}`)

  socket.on("message", ({ content, user }) => {
    socket.broadcast.emit("message", {
      content: content,
      user:
        user == "Anonymous"
          ? `Anonymous- ${socket.id.substring(0, 2)} (${userAgent}) `
          : ` ${user} (${userAgent})`,
    })
  })
})

server.listen(PORT, () => {
  console.log("\n Server runnin on IP: ", url, "\n")
})
