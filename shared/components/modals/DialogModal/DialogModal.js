import React from 'react'
import PropTypes from 'sb-proptypes'
import { modals } from 'helpers'

import DialogModalComponent from 'components/modal/DialogModal/DialogModal'


export default class DialogModal extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.object,
    buttonTitle: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
  }

  static defaultProps = {
    name: modals.Dialog,
  }

  render() {
    const { name, data: { title, content, ...data }, buttonTitle } = this.props

    return (
      <DialogModalComponent
        name={name}
        title={title}
        buttonTitle={buttonTitle}
        data={data}
      >
        {content}
      </DialogModalComponent>
    )
  }
}
