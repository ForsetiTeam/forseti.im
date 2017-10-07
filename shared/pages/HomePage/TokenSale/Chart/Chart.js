import React from 'react'

import { FormattedHTMLMessage } from 'sb-react-intl'
import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './Chart.scss'


const Chart = ({ className }) => (
  <div styleName="chartContainer" className={className}>
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
)

export default cssModules(Chart, styles, { allowMultiple: true })
