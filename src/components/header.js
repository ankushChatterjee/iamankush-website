import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import MenuItem from './menu-item'

const Header = ({ siteTitle }) => (
  <div className="header" css={{
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center',
    height:'10vh',
    width:'100vw',
    background:'#130f40',
    position:'fixed',
    zIndex:2,
    flexWrap:'wrap'
  }}>

  <a href="https://medium.com/@ankushc"><MenuItem hoverColor="green" name="Blog" /></a>
  <a href="https://www.youtube.com/channel/UCgY3bHW4qHKq9aC4i3nO-0g?view_as=subscriber"><MenuItem hoverColor="red" name="YouTube" /></a>
  <a href="https://www.linkedin.com/in/ankush-chatterjee-53695911b/"><MenuItem hoverColor="blue" name="LinkedIn" /></a>
  <a href="https://github.com/ankushChatterjee/"><MenuItem hoverColor="yellow" name="Github" /></a>
  <a href="https://codepen.io/ankushc/"><MenuItem hoverColor="teal" name="CodePen" /></a>
  </div>
)


export default Header
