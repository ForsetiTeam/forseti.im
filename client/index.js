import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { store } from 'redux/core'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { translationMessages } from 'i18n'
import routes from 'routes'

import Root from 'containers/Root/Root'

import './scss/fonts/index.scss'


const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.get('routing').toJS(),
})

const render = (translationMessages) => (
  ReactDOM.render(
    <Root store={store} history={history} translationMessages={translationMessages}>
      {routes}
    </Root>,
    document.getElementById('root')
  )
)

// TODO enable when Assets path will be resolved for Webpack building and [num].chunk.js will loads
if (!window.Intl) {
  require.ensure([
    'intl',
    'intl/locale-data/jsonp/en',
    'intl/locale-data/jsonp/ru',
  ], (require) => {
    require('intl')
    require('intl/locale-data/jsonp/en')
    require('intl/locale-data/jsonp/ru')

    render(translationMessages)
  })
}
else {
  render(translationMessages)
}
