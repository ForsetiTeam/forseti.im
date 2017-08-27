import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Loader.scss'


const Loader = ({ className, onClick }) => (
  <div styleName="loaderContainer" className={className} onClick={onClick}>
    <img styleName="loader" src={null} />
  </div>
)

export default cssModules(Loader, styles)

