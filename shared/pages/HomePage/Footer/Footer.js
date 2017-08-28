import React from 'react'
import { Flex, Box } from 'sb-flexbox'

import cssModules from 'react-css-modules'
import styles from './Footer.scss'

import WidthContainer from 'components/WidthContainer/WidthContainer'
import Socials from 'components/Socials/Socials'


const Footer = () => (
  <footer styleName="footer">
    <WidthContainer fullHeight>
      <Flex styleName="flex" align="center">
        <Box auto>
          <div styleName="logo">Forseti</div>
        </Box>
        <Box>
          <Socials
            whiteEmpty
            links={{
              facebook: 'https://www.facebook.com/forseti.im',
              twitter: 'https://twitter.com/forseti_im',
              telegram: 'https://t.me/forseti_channel',
              github: 'https://github.com/ForsetiTeam',
              mail: 'mailto:welcome@forseti.im',
            }}
          />
        </Box>
      </Flex>
    </WidthContainer>
  </footer>
)

export default cssModules(Footer, styles)
