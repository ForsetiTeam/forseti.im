import React from 'react'

import cssModules from 'react-css-modules'
import styles from './StayTuned.scss'

import WidthContainer from 'components/WidthContainer/WidthContainer'

import Section from '../Section/Section'
import Subscribe from './Subscribe/Subscribe'
import Follow from './Follow/Follow'


const StayTuned = () => (
  <Section styleName="container">
    <WidthContainer>
      <div styleName="stayTuned">
        <Subscribe />
        {/*<Follow />*/}
      </div>
    </WidthContainer>
  </Section>
)

export default cssModules(StayTuned, styles)
