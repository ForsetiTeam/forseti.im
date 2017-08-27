import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Section.scss'


const Section = ({ children, ...rest }) => (
  <div styleName="section" {...rest}>
    {children}
  </div>
)

export default cssModules(Section, styles)
