import React from "react"
import Message from "./Message"

const MessagesTable = (props) => {
  return (
    <section className="h-[80%] bg-[#b2c5b2] overflow-y-scroll overflow-x-hidden rounded-xl">
      <div className={`pt-3 pb-3  `}>
        {props.data.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>
    </section>
  )
}

export default MessagesTable
