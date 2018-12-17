import React from 'react'

import ColoredText from './colored-text'
import FatCursor from './fat-cursor';


const MainBanner = ({ transform }) => (
  <div style={{
    height: '80vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#f1f2f6',
    transform: `translateY(${transform})`,
    transition: 'transform 1s',
    zIndex:1
  }}>


    <div css={{
      fontSize: '3em',
      lineHeight: '1.5em',
      padding:'0.5em',
     '@media screen and (max-width: 450px)': {
         //fontSize: '1.5em',
         marginBottom:'20%'
       }
    }}>
      Hey, I am <ColoredText color="#ff6348">Ankush Chatterjee</ColoredText> <br />
      I am a <ColoredText color="#1e90ff">Programmer</ColoredText><FatCursor color="#fff"></FatCursor>
    </div>


  </div>
)

export default MainBanner
