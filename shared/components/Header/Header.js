import React from 'react'
import Media from 'sb-media'

import cssModules from 'react-css-modules'
import styles from './Header.scss'

import WidthContainer from 'components/WidthContainer/WidthContainer'

import ExceptMobile from './ExceptMobile/ExceptMobile'
// import Mobile from './Mobile/Mobile'


const Header = (props) => (
  <header styleName="header">
    <WidthContainer>
      <Media mobile>
        {(matches) => matches ? <div /> : <ExceptMobile />}
      </Media>
    </WidthContainer>
  </header>
)

export default cssModules(Header, styles)
