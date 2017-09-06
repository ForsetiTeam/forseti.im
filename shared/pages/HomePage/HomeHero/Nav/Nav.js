import React from 'react'

import { FormattedMessage } from 'sb-react-intl'
import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './Nav.scss'


const nav = [
  { title: messages.about },
  { title: messages.features },
  { title: messages.roadmap },
]

const Nav = () => (
  <div styleName="nav">
    {
      nav.map(({ title }, index) => (
        <FormattedMessage key={index} styleName="navItem" {...title} />
      ))
    }
  </div>
)

export default cssModules(Nav, styles)
