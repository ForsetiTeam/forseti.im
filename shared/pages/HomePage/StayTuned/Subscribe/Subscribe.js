import React from 'react'
import Link from 'sb-valuelink'

import { FormattedMessage } from 'sb-react-intl'
import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './Subscribe.scss'

import Input from 'components/forms/Input/Input'
import Button from 'components/controls/Button/Button'

import icon from './images/mailbox.png'


@cssModules(styles)
export default class Subscribe extends React.Component {

  state = {
    email: '',
  }

  render() {
    const emailLink = Link.state(this, 'email')

    return (
      <div styleName="container">
        <div styleName="title">Subscribe</div>
        <img styleName="icon" src={icon} />
        <div styleName="desc">Get the latest insights, tips and tricks delivered to your inbox</div>
        <Input rootClassName={styles.input} valueLink={emailLink} placeholder={messages.inputPlaceholder} />
        <div styleName="buttonContainer">
          <FormattedMessage styleName="button" tag="div" {...messages.buttonTitle} />
        </div>
      </div>
    )
  }
}
