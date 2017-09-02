import React from 'react'
import { Flex, Box } from 'sb-flexbox'

import cssModules from 'react-css-modules'
import styles from './ExceptMobile.scss'


@cssModules(styles)
export default class HeaderExceptMobile extends React.Component {

  render() {

    return (
      <Flex styleName="header" justify="space-between" align="center">
        <Box>
          <div styleName="logo">Forseti</div>
        </Box>
        <Box>
          <div styleName="nav">
            <div styleName="navItem">About</div>
            <div styleName="navItem">Features</div>
            <div styleName="navItem">Nutrition</div>
            <div styleName="navItem">Start now</div>
          </div>
        </Box>
      </Flex>
    )
  }
}
