import React from 'react'

import { FormattedHTMLMessage } from 'sb-react-intl'
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
      <div styleName="chart">
        <Chart />
      </div>
      <div styleName="capacity">
        <Capacity />
      </div>
    </div>
    <Subscribe styleName="subscribe" />
  </Section>
)

export default cssModules(TokenSale, styles, { allowMultiple: true })
