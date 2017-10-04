import React from 'react'
import { Flex, Box } from 'reflexbox'

import { FormattedMessage } from 'sb-react-intl'
import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './Subscribe.scss'


@cssModules(styles, { allowMultiple: true })
export default class Subscribe extends React.Component {

  render() {
    const { className } = this.props

    return (
      <div className={className}>
        <Flex justify="center">
          <Box>
            <input styleName="input" type="email" placeholder="Email" />
          </Box>
          <Box>
            <FormattedMessage styleName="button" tag="div" {...messages.subscribe} />
          </Box>
        </Flex>
        <FormattedMessage styleName="desc" tag="div" {...messages.desc} />
      </div>
    )
  }
}
