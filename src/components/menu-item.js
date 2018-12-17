import React from 'react'

const MenuItem = ({ hoverColor,name }) => (
  <span className={`menu-item hover-${hoverColor}`} >
  
     {name}
    
  </span>
)

export default MenuItem
