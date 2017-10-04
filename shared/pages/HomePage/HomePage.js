import React from 'react'

import cssModules from 'react-css-modules'
import styles from './HomePage.scss'

import HomeHero from './HomeHero/HomeHero'
import Services from './Services/Services'
import Roadmap from './Roadmap/Roadmap'
import Team from './Team/Team'
import Footer from './Footer/Footer'


const HomePage = () => (
  <div styleName="wrapper">
    <HomeHero />
    <Services />
    <Roadmap />
    <Team />
    <Footer />
  </div>
)

export default cssModules(HomePage, styles)
