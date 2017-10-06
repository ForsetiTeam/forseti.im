import React from 'react'

import { FormattedHTMLMessage } from 'sb-react-intl'
import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './Chart.scss'


const Chart = () => (
  <div styleName="chartContainer">
    <div styleName="titles">
      <FormattedHTMLMessage styleName="title" tag="div" {...messages.bounty} />
      <FormattedHTMLMessage styleName="title" tag="div" {...messages.team} />
      <FormattedHTMLMessage styleName="title" tag="div" {...messages.preSale} />
      <FormattedHTMLMessage styleName="title" tag="div" {...messages.sale} />
    </div>
    <div styleName="chart">
      <div styleName="section">
        <div styleName="piece bounty" />
        <div styleName="piece team" />
        <div styleName="piece preSale" />
      </div>
    </div>
  </div>
)

export default cssModules(Chart, styles, { allowMultiple: true })
