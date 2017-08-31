import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Achievements.scss'

import Section from '../Section/Section'
import Title from '../Title/Title'


const Achievements = () => (
  <Section styleName="section">
    <Title>Forseti <b>Achievements</b></Title>
    <div styleName="achievements">
      <div styleName="achievement" />
    </div>
  </Section>
)

export default cssModules(Achievements, styles)
