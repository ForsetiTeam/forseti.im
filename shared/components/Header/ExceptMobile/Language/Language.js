import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Language.scss'


const Language = () => (
  <div styleName="langContainer">
    <div styleName="lang">English</div>
    <div styleName="listContainer">
      <div styleName="list">
        <div styleName="item">Russian</div>
        <div styleName="item">Japan</div>
        <div styleName="item">Chinese</div>
      </div>
    </div>
  </div>
)

export default cssModules(Language, styles)