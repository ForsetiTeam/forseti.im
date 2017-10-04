import React from 'react'
import { connect } from 'redaction/immutable'

import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './Nav.scss'

import Href from 'components/Href/Href'


const Nav = ({ items }) => (
  <div styleName="nav">
    {
      items.map((item, index) => (
        <Href key={index} styleName="navItem" {...item} customColor />
      ))
    }
  </div>
)

export default connect({
  items: ({ ui: { locale } }) => [
    { title: messages.whitePaper, redirect: `/white-paper-${locale}.pdf` },
    { title: messages.github, redirect: 'https://github.com/ForsetiTeam' },
    { title: messages.telegram, redirect: `https://t.me/${locale === 'en' ? 'forseti_channel' : 'forseti_chat_ru' }` },
  ],
})(cssModules(Nav, styles))
