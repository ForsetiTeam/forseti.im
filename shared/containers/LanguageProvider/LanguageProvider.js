/*
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `shared/translations`)
 */

import React from 'react'
import { connect } from 'redaction/immutable'
import PropTypes from 'sb-proptypes'
import { IntlProvider } from 'react-intl'


const LanguageProvider = ({ children, locale, messages }) => (
  <IntlProvider locale={locale} messages={messages[locale]}>
    {children}
  </IntlProvider>
)

LanguageProvider.propTypes = {
  locale: React.PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.node.isRequired,
}

export default connect({
  locale: 'ui.locale',
})(LanguageProvider)
