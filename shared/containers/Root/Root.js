import React from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

import LanguageProvider from 'containers/LanguageProvider/LanguageProvider'


export default class Root extends React.Component {

  render() {
    const { children, store, history, translationMessages } = this.props

    return (
      <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
          <Router history={history}>
            {children}
          </Router>
        </LanguageProvider>
      </Provider>
    )
  }
}
