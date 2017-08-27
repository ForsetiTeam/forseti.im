import React from 'react'
import { links } from 'helpers'

import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './SubHeader.scss'

import WidthContainer from 'components/WidthContainer/WidthContainer'
import Href from 'components/Href/Href'


const nav = [
  { title: messages.startups, to: links.abs.startups },
  { title: messages.news, to: links.abs.news },
]

const SubHeader = () => (
  <div styleName="subHeader">
    <div styleName="nav">
      {
        nav.map((item, index) => (
          <Href
            key={index}
            styleName="link"
            activeClassName={styles.active}
            customColor
            {...item}
          />
        ))
      }
    </div>
  </div>
)

export default cssModules(SubHeader, styles)
