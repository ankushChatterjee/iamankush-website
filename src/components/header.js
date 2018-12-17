import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import MenuItem from './menu-item'

const Header = ({ siteTitle }) => (
  <div css={{
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center',
    height:'10vh',
    width:'100%',
    background:'#2f3542',
    zIndex:2,
    flexWrap:'wrap',
    '@media (max-width: 450px)': {
         height:'15vh'
     }
  }}>

  <a href="https://medium.com/@ankushc"><MenuItem hoverColor="green" name="Blog" /></a>
  <a href="https://www.youtube.com/channel/UCgY3bHW4qHKq9aC4i3nO-0g?view_as=subscriber"><MenuItem hoverColor="red" name="YouTube" /></a>
  <a href="https://www.linkedin.com/in/ankush-chatterjee-53695911b/"><MenuItem hoverColor="blue" name="LinkedIn" /></a>
  <a href="https://github.com/ankushChatterjee/"><MenuItem hoverColor="yellow" name="Github" /></a>
  <a href="https://codepen.io/ankushc/"><MenuItem hoverColor="teal" name="CodePen" /></a>

  <Link to="/random-thoughts/"><div css={{
        background:'#ff6348',
        color:'#fff',
        fontStyle:'bold',
        padding:'1em',
        right:'1em',
        cursor:'pointer',
        borderRadius:'9px',
        '@media (max-width: 450px)': {
          padding:'0.5em',
        } 
      }}>randomThoughts()</div></Link>

  </div>
)


export default Header
