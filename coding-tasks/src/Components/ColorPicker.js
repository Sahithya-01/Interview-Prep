import React, { useState } from 'react'

const ColorPicker = () => {
  const [color, setColor] = useState('#ffffff')
  const handleColorChange = (event) => {
    setColor(event.target.value)
  }
  return (
    <div>
      <input type="color" value={color} onChange={handleColorChange} />
      <p>Selected color is: {color}</p>
    </div>
  )
}

export default ColorPicker
