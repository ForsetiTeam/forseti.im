import React from 'react'
import { connect } from 'redaction/immutable'

import { FormattedHTMLMessage } from 'sb-react-intl'
import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './Nav.scss'

import Href from 'components/Href/Href'


const Nav = ({ items }) => (
  <div styleName="nav">
    {
      items.map(({ title, redirect }, index) => {

        if (redirect) {
          return (
            <Href key={index} styleName="navItem pointer" customColor redirect={redirect}>
              <FormattedHTMLMessage tag="div" {...title} />
            </Href>
          )
        }
        else {
          return (
            <FormattedHTMLMessage key={index} styleName="navItem" tag="div" {...title} />
          )
        }
      })
    }
  </div>
)

export default connect({
  items: ({ ui: { locale } }) => [
    { title: messages.whitePaper/* , redirect: `/forseti_wp_${locale}.pdf`*/ },
    { title: messages.github, redirect: 'https://github.com/ForsetiTeam' },
    { title: messages.telegram, redirect: `https://t.me/${locale === 'en' ? 'forseti_chat_en' : 'forseti_chat_ru' }` },
  ],
})(cssModules(Nav, styles, { allowMultiple: true }))
