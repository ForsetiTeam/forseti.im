import React from 'react'
import actions from 'redux/actions'
import PropTypes from 'sb-proptypes'

import { FormattedMessage, FormattedHTMLMessage } from 'sb-react-intl'

import cssModules from 'react-css-modules'
import styles from './Modal.scss'

import ModalContainer from 'components/modal/ModalContainer/ModalContainer'
import CloseIcon from 'components/controls/CloseIcon/CloseIcon'


@cssModules(styles)
export default class Modal extends React.Component {

  static propTypes = {
    children: PropTypes.node,
    name: PropTypes.string.isRequired,
    title: PropTypes.any,
    isOpened: PropTypes.bool,
    showCloseButton: PropTypes.bool,
    data: PropTypes.object,
    subText: PropTypes.any,
    disableClose: PropTypes.bool,
    disableCloseOverlay: PropTypes.bool,
  }

  static defaultProps = {
    isOpened: false,
    showCloseButton: true,
    disableClose: false,
    disableCloseOverlay: false,
  }

  close = () => {
    const { name, data, onClose, disableClose } = this.props

    if (!disableClose) {
      actions.modals.close(name)

      if (typeof onClose === 'function') {
        onClose()
      }
      if (data && typeof data.get('onClose') === 'function') {
        data.get('onClose')()
      }
    }
  }

  render() {
    const { name, className, onClick, title, showCloseButton,
      disableCloseOverlay, disableClose, subText, children } = this.props

    return (
      <ModalContainer
        name={name}
        disableClose={disableCloseOverlay}
        onClose={this.close}
      >
        <div styleName="modal" className={className} onClick={onClick}>
          {
            Boolean(title || showCloseButton) && (
              <div styleName="header">
                {
                  showCloseButton && !disableClose && (
                    <CloseIcon styleName="closeButton" onClick={this.close} />
                  )
                }
                {
                  Boolean(title) && (
                    typeof title === 'string' ? (
                      <div styleName="title">{title}</div>
                    ) : (
                      // TODO immutable title HACK!
                      <FormattedHTMLMessage
                        styleName="title"
                        {...(title.toJS ? title.toJS() : title)}
                      />
                    )
                  )
                }
              </div>
            )
          }
          <div styleName="content">
            {children}
            {
              Boolean(subText) && (
                typeof subText === 'string' ? (
                  <div styleName="subText">{subText}</div>
                ) : (
                  <FormattedHTMLMessage styleName="subText" tag="div" {...subText} />
                )
              )
            }
          </div>
        </div>
      </ModalContainer>
    )
  }
}
