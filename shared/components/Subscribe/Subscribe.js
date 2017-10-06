import React from 'react'
import { Flex, Box } from 'reflexbox'
import request from 'sb-request'

import { FormattedMessage } from 'sb-react-intl'
import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './Subscribe.scss'


@cssModules(styles, { allowMultiple: true })
export default class Subscribe extends React.Component {

  state = {
    email: '',
  }

  handleChange = (event) => {
    this.setState({
      email: event.target.value,
    })
  }

  submit = () => {
    const { email } = this.state

    if (email) {
      request.post('https://brainapi.ru/forseti/subscription', {
        body: {
          value: email,
        },
        sameOrigin: false,
      })
        .then(() => {

        })
    }
  }

  render() {
    const { email } = this.state
    const { className } = this.props

    return (
      <div className={className}>
        <Flex justify="center">
          <Box>
            <input styleName="input" type="email" placeholder="Email" value={email} onChange={this.handleChange} />
          </Box>
          <Box>
            <FormattedMessage styleName="button" tag="div" {...messages.subscribe} onClick={this.submit} />
          </Box>
        </Flex>
        <FormattedMessage styleName="desc" tag="div" {...messages.desc} />
      </div>
    )
  }
}
