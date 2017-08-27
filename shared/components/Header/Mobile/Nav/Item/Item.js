import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Item.scss'

import { FormattedMessage } from 'sb-react-intl'

import Href from 'components/Href/Href'


const HeaderNavItem = ({ title, to }) => (
  <div styleName="navItem">
    <Href styleName="title" to={to} customColor>
      <FormattedMessage {...title} />
    </Href>
  </div>
)

export default cssModules(HeaderNavItem, styles)
