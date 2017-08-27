import React from 'react'
import { links } from 'helpers'

import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './Nav.scss'

import Href from 'components/Href/Href'


const nav = [
  { title: messages.startups, to: links.abs.startups },
  { title: messages.news, to: links.abs.news },
]

const Nav = () => (
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
)

export default cssModules(Nav, styles, { allowMultiple: true })
