import React from 'react'

import FatCursor from './fat-cursor';


const MainBanner = ({ transform }) => (
  <div style={{
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#f1f2f6',
    zIndex:-1,
  }}>


    <div css={{
      fontSize: '4em',
      lineHeight: '1.5em',
      padding:'0.5em',
     '@media screen and (max-width: 450px)': {
         fontSize: '3em',
       }
    }}>
      Hey👋, I am <span style={{
        fontWeight:'bold',
        fontFamily:"'Shadows Into Light', cursive",
        fontSize: '1.2em',
        color:"#ffd32a"
      }}>Ankush</span> <br />
      I am a <span style={{fontWeight:'bold'}}>Programmer 💻</span><FatCursor color="#fff"></FatCursor>
    </div>


  </div>
)

export default MainBanner
