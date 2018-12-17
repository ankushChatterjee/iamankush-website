import React from 'react'

const ColoredText = ({ children, color }) => (
  <span style={{
      color:color,
  }}>
  
 {children} 
    
  </span>
)

export default ColoredText
