import React from 'react'

import SEO from '../components/seo'
import MainBanner from '../components/main-banner';
import Header from '../components/header';
import './app.css'

import MoreBanner from '../components/more-banner';


class IndexPage extends React.Component{

  constructor(props){
    super();
  }
  render() {
    return (
      <div>

        <SEO title="Home" keywords={['gatsby', 'application', 'react','ankush','web developer']} />
        <Header />
        <MainBanner />
        <MoreBanner/>
      </div>
    );
  }
}

export default IndexPage
