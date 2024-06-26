import React from "react"
import ColorInput from "./colorInput"

const Card = ({ setColor }) => {
  return (
    <div className="mt-3 w-11/12 rounded-2xl border-2 border-black shadow-none px-2 pt-2 text-background">
      <div className="text-xs sm:text-base text-left">CHOOSE INITIAL COLOR</div>
      <div className="pt-3 sm:pt-2 grid grid-cols-4">
        <ColorInput setColor={setColor} type="red" />
        <ColorInput setColor={setColor} type="green" />
        <ColorInput setColor={setColor} type="blue" />
        <div className="my-auto pl-3 text-xs sm:text-base">in %</div>
      </div>
    </div>
  )
}

export default Card
