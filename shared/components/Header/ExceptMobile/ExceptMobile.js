import React from 'react'
import { Flex, Box } from 'sb-flexbox'
import actions from 'redux/actions'
import { modals } from 'helpers'

import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './ExceptMobile.scss'

import Button from 'components/controls/Button/Button'
import Logo from 'components/Logo/Logo'

import Language from './Language/Language'
import Nav from './Nav/Nav'


@cssModules(styles)
export default class HeaderExceptMobile extends React.Component {

  render() {

    return (
      <Flex align="center">
        <Box>
          <Logo styleName="logo" dark />
        </Box>
        <Box auto>
          <Nav items={this.nav} />
        </Box>
        <Box>
          <Button
            styleName="postButton"
            h={34} brand title={messages.createPost}
            onClick={() => actions.modals.open(modals.Auth)}
          />
        </Box>
        <Box>
          <Language />
        </Box>
      </Flex>
    )
  }
}
