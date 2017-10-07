import React from 'react'

import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './TokenSale.scss'

import Subscribe from 'components/Subscribe/Subscribe'

import Section from '../Section/Section'
import Title from '../Title/Title'
import Chart from './Chart/Chart'
import Capacity from './Capacity/Capacity'


const TokenSale = () => (
  <Section>
    <Title {...messages.title} />
    <div styleName="content">
      <Capacity />
      <Chart styleName="chart" />
      <Subscribe styleName="subscribe" />
    </div>
  </Section>
)

export default cssModules(TokenSale, styles, { allowMultiple: true })
