import Messagebar from "./components/messagebar/MessageBar"
import { useEffect, useState } from "react"
import io from "socket.io-client"
import config from "./constants/config.js"
import { BiUser, BiSend } from "react-icons/bi"

const socket = io(`${config.url}:${config.port}`)

function App() {
  const [message, setmessage] = useState("")
  const [dataMessages, setmessages] = useState([])
  const [userName, setUserName] = useState("")
  const [userNameStatus, setIconNameStatus] = useState(false)

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
    <div className="bg-slate-700 px-4">
      <div className="h-screen">
        <nav className="h-[10%] flex items-center  ">
          <h1
            className="text-4xl font-bold text-white p-4 flex-grow "
            onClick={() => {
              setIconNameStatus(!userNameStatus)
            }}
          >
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
            />
          </div>
        </nav>

        <section className="h-[80%] bg-gray-800 overflow-y-scroll overflow-x-hidden">
          <div className={`pt-3 pb-3 `}>
            {dataMessages.map((message, index) => (
              <div
                className={`${
                  message.user != "Me" ? "float-left" : "float-right"
                } w-[60%] m-1`}
                key={index}
              >
                <p
                  className={`text-white ml-3 mt-1 ${
                    message.user != "Me" ? "bg-slate-600" : "bg-gray-900"
                  }  bg-slate-600 p-2 rounded-md `}
                >
                  {message.user}: {message.content}
                </p>
              </div>
            ))}
          </div>
        </section>
        <form className=" flex gap-3 py-4">
          <input
            type="text"
            id="mensaje"
            name="mensaje"
            onChange={(e) => {
              setmessage(e.target.value)
            }}
            value={message}
            className=" text-black flex-grow p-1 bg-slate-100"
            maxLength={20}
          />
          <button
            onClick={handleClick}
            className="mr-5 px-5   sm:px-16 bg-slate-900 text-white"
          >
            <BiSend />
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
