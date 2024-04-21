import React from "react"

const Button = ({ type, setValue, state, setState, setAntiState }) => {
  return (
    <button
      className={`w-5/12 bg-background mx-auto m-12 rounded-full ${state ? (type == 1 ? "border-4 border-blue-500 shadow-on" : "border-4 border-red-500 shadow-off") : "shadow-none"}`}
      onClick={() => {
        setState(!state)
        setAntiState(false)
        setValue(100)
      }}
    ></button>
  )
}

export default Button
