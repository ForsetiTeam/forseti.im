import React from 'react'
import Portal from 'react-portal'
import { connect } from 'redaction/immutable'
import { getScrollBarWidth } from 'helpers'

import Modals from 'components/modals'


@connect({
  modals: 'modals',
})
export default class ModalConductor extends React.Component {

  componentWillReceiveProps({ modals }) {
    // When modal is showing add overflow: hidden to body and padding-right: ${scrollWidth}
    // to prevent screen from blinking
    if (modals.size) {
      document.body.classList.add('body-modal-opened')
      document.body.style.paddingRight = `${getScrollBarWidth()}px`
    } else {
      document.body.classList.remove('body-modal-opened')
      document.body.style.paddingRight = '0px'
    }
  }

  render() {
    const { modals } = this.props

    let zIndex = 1000

    return (
      <Portal isOpened={true}>
        {/* this div needed bcs Portal waiting for one element in children */}
        <div>
          {
            modals.valueSeq().map(({ name, data = {} }, index) => (
              <div key={index} style={{ position: 'fixed', zIndex: zIndex + index }}>
                {
                  React.createElement(Modals[name], { data })
                }
              </div>
            ))
          }
        </div>
      </Portal>
    )
  }
}
