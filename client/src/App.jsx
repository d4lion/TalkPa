import Messagebar from "./components/messagebar/MessageBar"
import { useEffect, useState } from "react"
import io from "socket.io-client"
import config from "./constants/config.js"
import { BiUser, BiSend } from "react-icons/bi"
import logo from "../src/assets/hoja.svg"

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
    <div className="bg-[#647c50] px-4">
      <div className="h-screen">
        <nav className="h-[10%] flex items-center overflow-hidden ">
          <h1
            className="text-4xl font-extrabold text-white p-4 flex-grow flex gap-2"
            onClick={() => {
              setIconNameStatus(!userNameStatus)
            }}
          >
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
              className="px-3 py-1 rounded-md font-thin text-[#647c50]  "
            />
          </div>
        </nav>

        <section className="h-[80%] bg-[#b2c5b2] overflow-y-scroll overflow-x-hidden rounded-xl">
          <div className={`pt-3 pb-3  `}>
            {dataMessages.map((message, index) => (
              <div
                className={`${
                  message.user != "Me" ? "float-left" : "float-right"
                } w-[60%] ml-1 mr-3 mt-2 overflow-x-scroll `}
                key={index}
              >
                <p
                  className={`text-white  ml-3 mt-1 ${
                    message.user != "Me"
                      ? "bg-[#1b2727]"
                      : "bg-[#3c5148] block gap-1"
                  } sm:p-3  p-1 rounded-md font-light mb-1`}
                >
                  <p className="font-bold">{message.user}</p>
                  {message.content != ""
                    ? message.content
                    : "Este mensaje solo lo puedes ver tu"}
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
            className=" text-black flex-grow p-1 bg-slate-100 rounded-md "
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
