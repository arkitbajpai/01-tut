import React from 'react'

const Square = ({colorValue}) => {
  return (
    <div>
<section
   className="Square"
    style={{backgroundColor:colorValue}}>
      <p>{colorValue? colorValue:"Empty value"}</p>
    
   </section>
      
    </div>
  )
}
Square.defaultProps = {
  colorValue: "Empty value"
}

export default Square
