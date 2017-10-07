import React from 'react'
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
        <div styleName="row">
          <div styleName="col">
            <input styleName="input" type="email" placeholder="Email" value={email} onChange={this.handleChange} />
          </div>
          <div styleName="col">
            <FormattedMessage styleName="button" tag="div" {...messages.subscribe} onClick={this.submit} />
          </div>
        </div>
        <FormattedMessage styleName="desc" tag="div" {...messages.desc} />
      </div>
    )
  }
}
