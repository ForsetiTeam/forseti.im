import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Mobile.scss'

import CommonButton from 'components/controls/buttons/CommonButton/CommonButton'


const ConfirmModalMobile = ({ children, confirmTitle, onConfirm, onCancel }) => (
  <div>
    {children}
    <CommonButton styleName="confirmButton" brand confirm fullWidth title={confirmTitle} onClick={onConfirm} />
    <div styleName="footer">
      <CommonButton emptyGray back fullWidth onClick={onCancel} />
    </div>
  </div>
)

export default cssModules(ConfirmModalMobile, styles)
