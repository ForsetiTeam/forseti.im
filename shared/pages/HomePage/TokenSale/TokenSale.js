import React from 'react'

import { FormattedHTMLMessage } from 'sb-react-intl'
import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './TokenSale.scss'

import Section from '../Section/Section'
import Title from '../Title/Title'
import Capacity from './Capacity/Capacity'


const TokenSale = () => (
  <Section>
    <Title {...messages.title} />
    <div styleName="content">
      <Capacity />
      <div styleName="chartContainer">
        <div styleName="chart">
          <div styleName="bounty">
            <FormattedHTMLMessage styleName="title" tag="div" {...messages.bounty} />
          </div>
          <div styleName="team">
            <FormattedHTMLMessage styleName="title" tag="div" {...messages.team} />
          </div>
          <div styleName="preSale">
            <FormattedHTMLMessage styleName="title" tag="div" {...messages.preSale} />
          </div>
          <div styleName="sale">
            <FormattedHTMLMessage styleName="title" tag="div" {...messages.sale} />
          </div>
        </div>
      </div>
    </div>
  </Section>
)

export default cssModules(TokenSale, styles, { allowMultiple: true })
