import React from 'react'
import PropTypes from 'sb-proptypes'
import { event } from 'helpers'

import cssModules from 'react-css-modules'
import styles from './ModalContainer.scss'

import Overlay from 'components/Overlay/Overlay'
import Center from 'components/Center/Center'


@cssModules(styles)
export default class ModalContainer extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  }

  handleMount = (el) => {
    if (el) {
      setTimeout(() => {
        el.classList.add(styles.mounted)
      }, 0)
    }
  }

  close = () => {
    const { disableClose, onClose } = this.props

    if (!disableClose) {
      onClose()
    }
  }

  render() {
    const { children } = this.props

    return (
      <Overlay onClick={this.close}>
        <Center>
          <div
            styleName="modalContainer"
            ref={this.handleMount}
            onClick={event.stopPropagation}
          >
            {children}
          </div>
        </Center>
      </Overlay>
    )
  }
}
