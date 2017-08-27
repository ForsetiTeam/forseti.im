import React from 'react'
import { connect } from 'redaction/immutable'
import { redirect, links } from 'helpers'


@connect({
  isLoggedIn: 'auth.isLoggedIn',
})
class HasAuth extends React.Component {

  componentWillMount() {
    const { isLoggedIn, location: { pathname } } = this.props

    if (!isLoggedIn) {
      redirect(links.abs.login, pathname)
    }
  }

  render() {
    const { children, isLoggedIn } = this.props

    return isLoggedIn && children
  }
}

export default HasAuth
