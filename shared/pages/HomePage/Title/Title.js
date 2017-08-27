import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Title.scss'


const Title = ({ children, ...rest }) => (
  <div styleName="title" {...rest}>
    {children}
  </div>
)

export default cssModules(Title, styles)
