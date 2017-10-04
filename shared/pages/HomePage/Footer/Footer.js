import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Footer.scss'

import Subscribe from 'components/Subscribe/Subscribe'


const Footer = () => (
  <footer styleName="footer">
    <Subscribe />
  </footer>
)

export default cssModules(Footer, styles)
