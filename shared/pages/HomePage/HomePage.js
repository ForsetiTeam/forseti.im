import React from 'react'

import cssModules from 'react-css-modules'
import styles from './HomePage.scss'

import HomeHero from './HomeHero/HomeHero'
import Services from './Services/Services'
import HowItWorks from './HowItWorks/HowItWorks'
import Roadmap from './Roadmap/Roadmap'
import TokenSale from './TokenSale/TokenSale'
import Team from './Team/Team'
import Achievements from './Achievements/Achievements'
import Footer from './Footer/Footer'


const HomePage = () => (
  <div styleName="wrapper">
    <HomeHero />
    <Services />
    <HowItWorks />
    <Roadmap />
    <TokenSale />
    <Team />
    <Achievements />
    <Footer />
  </div>
)

export default cssModules(HomePage, styles)
