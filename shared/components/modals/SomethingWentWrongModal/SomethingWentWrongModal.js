import React from 'react'
import PropTypes from 'sb-proptypes'
import { modals } from 'helpers'

import { FormattedMessage } from 'sb-react-intl'
import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './SomethingWentWrongModal.scss'

import DialogModal from 'components/modal/DialogModal/DialogModal'


@cssModules(styles)
export default class SomethingWentWrongModal extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  static defaultProps = {
    name: modals.SomethingWentWrong,
  }

  render() {
    const { name } = this.props

    return (
      <DialogModal
        name={name}
        title={messages.title}
        buttonTitle={messages.buttonTitle}
      >
        <FormattedMessage {...messages.text} />
      </DialogModal>
    )
  }
}
