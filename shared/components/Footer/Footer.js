import React from 'react'
import { Flex, Box } from 'sb-flexbox'

import cssModules from 'react-css-modules'
import styles from './Footer.scss'

import WidthContainer from 'components/WidthContainer/WidthContainer'


const Footer = () => (
  <footer styleName="footer">
    <WidthContainer fullHeight>
      <Flex styleName="flex" align="center">
        <Box auto>
          <div styleName="logo">Forseti</div>
        </Box>
        <Box>

        </Box>
      </Flex>
    </WidthContainer>
  </footer>
)

export default cssModules(Footer, styles)
