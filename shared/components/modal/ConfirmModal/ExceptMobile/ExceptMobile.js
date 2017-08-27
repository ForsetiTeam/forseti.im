import React from 'react'
import { Flex, Box } from 'sb-flexbox'

import cssModules from 'react-css-modules'
import styles from './ExceptMobile.scss'

import CommonButton from 'components/controls/buttons/CommonButton/CommonButton'


const ConfirmModalExceptMobile = ({ children, confirmTitle, onConfirm, onCancel }) => (
  <div>
    {children}
    <Flex styleName="buttons" justify="center">
      <Box pr={1}>
        <CommonButton emptyGray back onClick={onCancel} />
      </Box>
      <Box pl={1}>
        <CommonButton brand confirm title={confirmTitle} onClick={onConfirm} />
      </Box>
    </Flex>
  </div>
)

export default cssModules(ConfirmModalExceptMobile, styles)
