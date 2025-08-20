import React from 'react'

const Input = ({colorValue, setColorValue}) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();}
    }>
        <label
        autoFocus
        type="text"
        placeholder="Enter a color"
        value={colorValue}
        onChange={(e) => setColorValue(e.target.value)}
        />
      </form>

  )
}
export default Input
