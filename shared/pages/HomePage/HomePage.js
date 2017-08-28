import React from 'react'

import cssModules from 'react-css-modules'
import styles from './HomePage.scss'

import WidthContainer from 'components/WidthContainer/WidthContainer'

import HomeHero from './HomeHero/HomeHero'
import Services from './Services/Services'
import Team from './Team/Team'
import Footer from './Footer/Footer'


const HomePage = () => (
  <div>
    <HomeHero />
    <WidthContainer main>
      <Services />
      <Team />
    </WidthContainer>
    <Footer />
  </div>
)

export default cssModules(HomePage, styles)
