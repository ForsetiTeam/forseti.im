import React from 'react'
import PropTypes from 'sb-proptypes'
import Media from 'sb-media'

import Modal from 'components/modal/Modal/Modal'

import ExceptMobile from './ExceptMobile/ExceptMobile'
import Mobile from './Mobile/Mobile'


export default class ConfirmModal extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.object.isRequired,
    confirmTitle: PropTypes.object,
    subText: PropTypes.any,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  }

  confirm = () => {
    const { onConfirm } = this.props

    if (typeof onConfirm === 'function') {
      onConfirm()
    }
  }

  cancel = () => {
    const { onCancel } = this.props

    if (typeof onCancel === 'function') {
      onCancel()
    }
  }

  render() {
    const { children, name, title, confirmTitle, subText } = this.props

    return (
      <Modal
        name={name}
        title={title}
        subText={subText}
      >
        <Media mobile>
          {
            (matches) => React.createElement(matches ? Mobile : ExceptMobile, {
              confirmTitle,
              onConfirm: this.confirm,
              onCancel: this.cancel,
            }, children)
          }
        </Media>
      </Modal>
    )
  }
}
