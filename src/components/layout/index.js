import React from 'react'
import HeroSection from './heroSection';
import './index.scss'
import Services from './services';

const Layout = () => {
  return (
    <div id='layout'>
        <HeroSection/>
        <Services/>
    </div>
  )
}

export default Layout