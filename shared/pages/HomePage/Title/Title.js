import React from 'react'
import cx from 'classnames'

import cssModules from 'react-css-modules'
import styles from './Title.scss'


const Title = ({ children, center = true, ...rest }) => (
  <div styleName={cx('title', { center })} {...rest}>
    {children}
  </div>
)

export default cssModules(Title, styles, { allowMultiple: true })
