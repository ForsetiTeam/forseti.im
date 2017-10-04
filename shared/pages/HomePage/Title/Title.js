import React from 'react'
import cx from 'classnames'

import { FormattedMessage } from 'sb-react-intl'

import cssModules from 'react-css-modules'
import styles from './Title.scss'


const Title = ({ center = true, ...rest }) => (
  <FormattedMessage styleName={cx('title', { center })} tag="div" {...rest} />
)

export default cssModules(Title, styles, { allowMultiple: true })
