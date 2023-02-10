import { useEffect, useState } from "react"
import io from "socket.io-client"
import config from "./constants/config.js"
import { BiUser, BiSend } from "react-icons/bi"
import logo from "../src/assets/hoja.svg"
import MessageTable from "./components/messagebar/MessagesTable"

const socket = io(`${config.url}:${config.port}`)

function App() {
  const [message, setmessage] = useState("")
  const [dataMessages, setmessages] = useState([])
  const [userName, setUserName] = useState("")
  const [userNameStatus, setIconNameStatus] = useState(true)

  useEffect(() => {
    const receivedMessages = (message) => {
      setmessages([...dataMessages, message])
    }
    socket.on("message", receivedMessages)
  }, [dataMessages])

  function handleClick(e) {
    e.preventDefault()
    if (userName == "") {
      message != ""
        ? socket.emit("message", {
            content: message,
            user: "Anonymous",
          })
        : ""
    } else {
      message != ""
        ? socket.emit("message", {
            content: message,
            user: userName,
          })
        : ""
    }

    setmessages([
      ...dataMessages,
      {
        content: message,
        user: "Me",
      },
    ])

    setmessage("")
  }

  return (
    <div className="bg-[#647c50] px-4  ">
      <div className="h-screen">
        <nav className="h-[10%] flex items-center overflow-hidden flex-wrap ">
          <h1 className="text-4xl font-extrabold text-white p-4 flex-grow flex gap-2 basis-auto">
            <img src={logo} className="h-10 items-center" />
            TalkPa
          </h1>
          <BiUser
            className="text-white cursor-pointer"
            onClick={() => {
              setIconNameStatus(!userNameStatus)
            }}
          />
          <div
            className={`${
              userNameStatus ? "flex" : "hidden"
            } mr-2 ml-5 items-center `}
          >
            <input
              type="text"
              onChange={(e) => {
                setUserName(e.target.value)
              }}
              placeholder="Pon tu nombre"
              className="px-3 py-1 rounded-md font-light text-[#647c50] sm:w-auto w-32"
            />
          </div>
        </nav>

        <MessageTable data={dataMessages} />
        <form className=" flex gap-3 py-4">
          <input
            type="text"
            id="mensaje"
            name="mensaje"
            onChange={(e) => {
              setmessage(e.target.value)
            }}
            value={message}
            className=" text-black flex-grow p-1 bg-slate-100 rounded-md"
          />
          <button
            onClick={handleClick}
            className="mr-5 px-5   sm:px-16 bg-[#FFFFFF] text-white rounded-md  "
          >
            <BiSend className="text-[#647c50]" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
