import React from 'react'

const Input = ({colorValue, setColorValue}) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();}
    }>
        <label>Add CLor Name:</label>
        <input
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
