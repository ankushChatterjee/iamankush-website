import React from 'react'

const FatCursor = ({ color }) => (
  <span style={{
      color:color,
      animation:'blip 1s linear infinite'
  }}>
  |
  </span>
)

export default FatCursor
