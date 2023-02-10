const Message = (props) => {
  return (
    <div
      className={`${
        props.message.user != "Me" ? "float-left" : "float-right"
      } w-[60%] ml-1 mr-3 mt-2`}
    >
      <p
        className={`text-white  ml-3 mt-1 ${
          props.message.user != "Me"
            ? "bg-[#1b2727]"
            : "bg-[#3c5148] block gap-1"
        } sm:p-3  p-1 rounded-md font-light mb-1`}
      >
        <p className="font-bold">{props.message.user}</p>
        {props.message.content != ""
          ? props.message.content
          : "ERROR: Este mensaje solo lo puedes ver tu "}
      </p>
    </div>
  )
}

export default Message
