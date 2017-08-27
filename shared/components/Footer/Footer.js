import React from 'react'
import { Flex, Box } from 'sb-flexbox'

import cssModules from 'react-css-modules'
import styles from './Footer.scss'

import WidthContainer from 'components/WidthContainer/WidthContainer'
import Logo from 'components/Logo/Logo'


const Footer = () => (
  <footer styleName="footer">
    <WidthContainer>
      <Flex
        justify="space-between"
        align="center"
      >
        <Box>
          <Logo styleName="logo" light />
        </Box>
      </Flex>
    </WidthContainer>
  </footer>
)

export default cssModules(Footer, styles)
