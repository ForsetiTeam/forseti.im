import React from 'react'
import PropTypes from 'sb-proptypes'
import actions from 'redux/actions'

import cssModules from 'react-css-modules'
import styles from './DialogModal.scss'

import Button from 'components/controls/Button/Button'
import CommonButton from 'components/controls/buttons/CommonButton/CommonButton'
import Modal from 'components/modal/Modal/Modal'
import ModalFooter from 'components/modal/ModalFooter/ModalFooter'


@cssModules(styles)
export default class DialogModal extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    subText: PropTypes.node,
    data: PropTypes.object,
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    buttonTitle: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
  }

  close = () => {
    const { name, data } = this.props

    actions.modals.close(name)

    if (data && typeof data.get('onClose') === 'function') {
      data.get('onClose')()
    }
  }

  render() {
    const { name, title, subText, buttonTitle, data, children } = this.props

    return (
      <Modal
        name={name}
        title={title}
        subText={subText}
        data={data}
      >
        {children}
        <ModalFooter>
          {
            Boolean(buttonTitle) ? (
              <Button brand h={45} title={buttonTitle} onClick={this.close} />
            ) : (
              <CommonButton brand finish onClick={this.close} />
            )
          }
        </ModalFooter>
      </Modal>
    )
  }
}
