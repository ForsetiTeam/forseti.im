import React from 'react'
import { connect } from 'redaction/immutable'
import { Flex, Box } from 'sb-flexbox'
import { links } from 'helpers'

import cssModules from 'react-css-modules'
import styles from './Mobile.scss'

import HeaderHeight from 'components/header/HeaderHeight/HeaderHeight'
import HeaderStyle from 'components/header/HeaderStyle/HeaderStyle'
import CreatePostButton from 'components/controls/buttons/CreatePostButton/CreatePostButton'
import Logo from 'components/Logo/Logo'

import HamburgerButton from './HamburgerButton/HamburgerButton'
import SubHeader from './SubHeader/SubHeader'
import Nav from './Nav/Nav'


const HeaderMobile = ({ isLoggedIn }) => (
  <header>
    <HeaderStyle>
      <HeaderHeight>
        <Flex styleName="flex" justify="center" align="center">
          {/*
          <Box>
            <HamburgerButton />
          </Box>
          */}
          <Box auto>
            <Logo styleName="logo" dark to={links.abs.home} />
          </Box>
          <Box>
            <CreatePostButton styleName="createPost" h={30} brand />
          </Box>
        </Flex>
      </HeaderHeight>
    </HeaderStyle>
    <SubHeader />
    {/*
      isLoggedIn && (
        <Nav />
      )
    */}
  </header>
)

export default connect({
  isLoggedIn: 'auth.isLoggedIn',
})(cssModules(HeaderMobile, styles))
