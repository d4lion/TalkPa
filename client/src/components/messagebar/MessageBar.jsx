import React, { useState, useEffect } from "react"
import config from "../../constants/config.js"
import io from "socket.io-client"

const socket = io(`${config.url}:${config.port}`)

const MessageBar = () => {
  const [message, setmessage] = useState("")

  // Este handle busca el evaluar el momento en que se genere un cambio para poner de manera temporal un valor
  // a el mensaje que va a ser enviado

  function handleClick(e) {
    e.preventDefault()
    message != "" ? socket.emit("message", message) : ""
    setmessage("")
  }

  //--------------------------------------------------------------------//
  // Se mantiene a la espera de que un socket dispare el evento para    //
  // Poder enviar el mensaje a los demas sockests y que estos reflejen  //
  //--------------------------------------------------------------------//

  return (
    <>
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
        <button onClick={handleClick} className="px-16 bg-slate-900 text-white">
          Send
        </button>
      </form>
    </>
  )
}

export default MessageBar
