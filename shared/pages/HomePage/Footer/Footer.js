import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Footer.scss'

import Subscribe from 'components/Subscribe/Subscribe'

import Follow from './Follow/Follow'


const Footer = () => (
  <footer styleName="footer">
    <Subscribe />
    <Follow />
  </footer>
)

export default cssModules(Footer, styles)
