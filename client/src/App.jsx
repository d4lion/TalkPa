import Messagebar from "./components/messagebar/MessageBar"
import { useEffect, useState } from "react"
import io from "socket.io-client"
import config from "./constants/config.js"

const socket = io(`${config.url}:${config.port}`)

function App() {
  const [dataMessages, setmessages] = useState([])
  const [userConnected, setUserConnected] = useState("")

  useEffect(() => {
    const receivedMessages = (message) => {
      setmessages([...dataMessages, message])
    }

    socket.on("message", receivedMessages)
  }, [dataMessages])

  useEffect(() => {
    const receivedConnection = (user) => {
      setUserConnected(user)
      console.log(user)
    }

    socket.on("userConnected", receivedConnection)
  }, [userConnected])

  return (
    <div className="bg-slate-700 px-4">
      <div className="h-screen">
        <nav className="h-[7%]">
          <h1 className="text-4xl font-bold text-white p-4">TalkPa</h1>
        </nav>

        <div className=" block py-1 ">
          {userConnected != "" ? (
            <p className="text-white text-center">
              Ultima conexion: {userConnected}
            </p>
          ) : (
            ""
          )}
        </div>
        <section className="h-[80%] bg-gray-800 overflow-y-scroll overflow-x-hidden ">
          <div className="pt-3">
            {dataMessages.map((message, index) => (
              <p className="text-white ml-3 mt-1" key={index}>
                {message.user}: {message.content}
              </p>
            ))}
          </div>
        </section>
        <Messagebar />
      </div>
    </div>
  )
}

export default App
