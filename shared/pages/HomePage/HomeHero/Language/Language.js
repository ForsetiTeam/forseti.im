import React from 'react'
import { connect } from 'redaction/immutable'
import actions from 'redux/actions'
import cx from 'classnames'

import cssModules from 'react-css-modules'
import styles from './Language.scss'


const langs = [
  { title: 'En', locale: 'en' },
  { title: 'Ru', locale: 'ru' },
]

const Language = ({ activeLocale }) => (
  <div styleName="nav">
    {
      langs.map(({ title, locale }) => {
        const styleName = cx('navItem', {
          'active': activeLocale === locale,
        })

        return (
          <div
            key={locale}
            styleName={styleName}
            onClick={() => actions.ui.setLocale(locale)}
          >
            {title}
          </div>
        )
      })
    }
  </div>
)

export default connect({
  activeLocale: 'ui.locale',
})(cssModules(Language, styles, { allowMultiple: true }))
