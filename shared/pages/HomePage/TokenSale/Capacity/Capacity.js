import React from 'react'

import { FormattedMessage } from 'sb-react-intl'
import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './Capacity.scss'


const Capacity = () => (
  <div styleName="caps">
    <div styleName="cap minimal">
      <div styleName="arrow" />
      <div styleName="amount">$3,000,000</div>
      <FormattedMessage styleName="label" tag="div" {...messages.minimal} />
    </div>
    <div styleName="cap maximal">
      <div styleName="arrow" />
      <div styleName="amount">$8,000,000</div>
      <FormattedMessage styleName="label" tag="div" {...messages.maximal} />
    </div>
  </div>
)

export default cssModules(Capacity, styles, { allowMultiple: true })
