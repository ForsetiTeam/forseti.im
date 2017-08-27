import React from 'react'
import PropTypes from 'sb-proptypes'
import Link from 'sb-valuelink'
import { modals, links } from 'helpers'

import { FormattedMessage, FormattedHTMLMessage } from 'sb-react-intl'
import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './AuthModal.scss'

import Modal from 'components/modal/Modal/Modal'
import Input from 'components/forms/Input/Input'
import Button from 'components/controls/Button/Button'


@cssModules(styles)
export default class AuthModal extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.object,
  }

  static defaultProps = {
    name: modals.Auth,
  }

  state = {
    email: '',
    password: '',
    isLoginForm: true,
  }

  render() {
    const { isLoginForm } = this.state
    const { name } = this.props

    const linked = Link.all(this, 'email', 'password', 'isLoginForm')

    return (
      <Modal styleName="authModal" name={name} title={isLoginForm ? messages.loginTitle : messages.registerTitle}>
        <Input styleName="field" valueLink={linked.email} label={messages.email} />
        <Input styleName="field" valueLink={linked.password} label={messages.password} />
        {
          isLoginForm ? (
            <div>
              <div styleName="footer">
                <FormattedMessage styleName="forgotLink" tag="div" {...messages.forgotPassword} />
                <FormattedMessage
                  styleName="brandLink"
                  tag="div"
                  {...messages.dontHaveAnAccount}
                  onClick={() => linked.isLoginForm.set(false)}
                />
              </div>
              <Button h={46} brand title={messages.login} />
            </div>
          ) : (
            <div>
              <FormattedHTMLMessage
                styleName="rules"
                tag="div"
                {...messages.rules}
                values={{ terms: links.abs.terms, privacy: links.abs.privacy }}
              />
              <Button h={46} brand title={messages.register} />
              <div styleName="haveAccount">
                <FormattedMessage {...messages.haveAnAccount} />&nbsp;
                <FormattedMessage
                  styleName="brandLink"
                  {...messages.login}
                  onClick={() => linked.isLoginForm.set(true)}
                />
              </div>
            </div>
          )
        }
      </Modal>
    )
  }
}
