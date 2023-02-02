import React, { useState } from "react"

export const MessageBar = () => {
  const [message, setmessage] = useState("")

  // Este handle busca el evaluar el momento en que se genere un cambio para poner de manera temporal un valor
  // a el mensaje que va a ser enviado

  function handleChange(e) {
    setmessage(e.target.value)
  }

  function handleClick(e) {
    e.preventDefault()
    console.log(message)
    setmessage("")
  }

  return (
    <>
      <form className=" flex gap-3 py-4">
        <input
          type="text"
          id="mensaje"
          name="mensaje"
          onChange={handleChange}
          value={message}
          className=" text-black flex-grow p-1 bg-slate-100"
        />
        <button onClick={handleClick} className="px-16 bg-slate-900 text-white">
          Send
        </button>
      </form>
    </>
  )
}

export default MessageBar
