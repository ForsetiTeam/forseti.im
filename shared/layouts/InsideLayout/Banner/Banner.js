import React from 'react'
import { Flex, Box } from 'reflexbox'

import cssModules from 'react-css-modules'
import styles from './Banner.scss'

import Button from 'components/controls/Button/Button'


const Banner = () => (
  <div styleName="banner">
    <Flex justify="center" align="center">
      <Box>
        <div styleName="text">Create your own content and earn 1 ETH daily!</div>
      </Box>
      <Box>
        <Button h={36} white title="Start earning" />
      </Box>
    </Flex>
  </div>
)

export default cssModules(Banner, styles)