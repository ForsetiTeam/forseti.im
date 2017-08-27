import React from 'react'
import actions from 'redux/actions'
import { reducers } from 'redux/core'
import { connect } from 'redaction/immutable'
import { links } from 'helpers'

import RequestLoader from 'components/RequestLoader/RequestLoader'
import ModalConductor from 'components/modal/ModalConductor/ModalConductor'

import './App.scss'


@connect({
  isLoggedIn: 'auth.isLoggedIn',
})
export default class App extends React.Component {

  componentWillMount() {
    const { isLoggedIn } = this.props

    document.body.classList.add(`body-${isLoggedIn ? 'auth' : 'no-auth'}`)

    console.debug('links', links)
    console.debug('actions', actions)
    console.debug('reducers', reducers)
  }

  componentWillReceiveProps({ isLoggedIn: newIsLoggedIn }) {
    const { isLoggedIn: oldIsLoggedIn } = this.props

    if (newIsLoggedIn !== oldIsLoggedIn) {
      document.body.classList.toggle('body-no-auth')
      document.body.classList.toggle('body-auth')
    }
  }

  render() {
    const { children } = this.props

    return (
      <div>
        {children}
        <RequestLoader />
        <ModalConductor />
      </div>
    )
  }
}
