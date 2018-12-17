import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import MainBanner from '../components/main-banner';
import Header from '../components/header';
import './app.css'
import IconButton from '../components/icon-button';
import moreIcon from '../components/icons/more';
import MoreBanner from '../components/more-banner';


class IndexPage extends React.Component{

  constructor(props){
    super();
    this.state = {
      transformMain:0,
      transformMore:'100%',
      rotateArrow:0,
      showingMain:true,
      buttonText:'More'
    };
    this.changeBannerBind = this.changeBanner.bind(this);
  }

  componentDidMount() {
    document.querySelector('body').style.overflow = 'hidden';
  }

  changeBanner() {
    console.log("change banner");

    if(this.state.showingMain){
        this.setState({transformMain:'-110%',transformMore:'-100%',showingMain:false,rotateArrow:'-180deg',buttonText:'Back'});
    }else{
        this.setState({transformMain:'0%',transformMore:'0%',showingMain:true,rotateArrow:'0deg',buttonText:'More'});
    }
  }

  render() {
    console.log("Re render",this.state);
    return (
      <div>

        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        <Header />
        <MainBanner transform={this.state.transformMain} />
        <MoreBanner transform={this.state.transformMore} />
        <IconButton params={{
          icon: moreIcon,
          callback: this.changeBannerBind,
          left: '1em',
          bottom: '0.5em',
          text: this.state.buttonText,
          rotateArrow:this.state.rotateArrow
        }} />

      </div>
    );
  }
}

export default IndexPage
