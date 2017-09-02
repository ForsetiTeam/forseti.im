import React from 'react'
import { connect } from 'redaction/immutable'

import cssModules from 'react-css-modules'
import styles from './Mobile.scss'


const HeaderMobile = ({ isLoggedIn }) => (
  <header>

  </header>
)

export default connect({
  isLoggedIn: 'auth.isLoggedIn',
})(cssModules(HeaderMobile, styles))
