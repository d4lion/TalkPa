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
      <footer>
        <form>
          <input
            type="text"
            id="mensaje"
            name="mensaje"
            onChange={handleChange}
            value={message}
          />
          <button onClick={handleClick}>Send</button>
        </form>
      </footer>
    </>
  )
}

export default MessageBar
