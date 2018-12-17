import React from 'react'

const IconButton = ({ params }) => {
    console.log(params);
    return (
        <div css={{
          display:'flex',
          borderRadius:'1000px',
          background:'#fff',
          boxShadow:'0px 0px 17px 0px black',
          paddingLeft:'20px',
          paddingRight:'20px',
          paddingTop:'10px',
          paddingBottom:'10px',
          position:'absolute',
          fontSize:'1em',
          color:'#333',
          cursor:'pointer',
          left:params.left,
          right:params.right,
          top:params.top,
          bottom:params.bottom,
          '@media (max-width: 450px)': {
            paddingBottom:'5px',
            paddingTop:'5px'
          } 
        }} onClick={params.callback} >
        
        <span style={{
          transform:`rotate(${params.rotateArrow})`,
          transition:'transform 1s',
          transformOrigin:'50% 40%'
        }}>
          {params.icon()}
        </span>
        <span style={{
            paddingLeft:'5px'
        }}>
          {params.text}
        </span>
          
        </div>
      )
} 

export default IconButton
