import React from 'react'
import ArticleSection from './articles';
import HeroSection from './heroSection';
import './index.scss'
import Services from './services';

const Layout = () => {
  return (
    <div id='layout'>
        <HeroSection/>
        {/* <Services/> */}
        {/* <ArticleSection/> */}
    </div>
  )
}

export default Layout