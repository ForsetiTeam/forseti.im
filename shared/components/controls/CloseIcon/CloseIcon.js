import React from 'react'
import cx from 'classnames'

import cssModules from 'react-css-modules'
import styles from './CloseIcon.scss'


const CloseIcon = ({ whiteColor, brandColor, ...rest }) => {
  const iconStyleName = cx('icon', {
    whiteColor,
    brandColor,
  })

  return (
    <div styleName={iconStyleName} role="closeIcon" {...rest} />
  )
}

export default cssModules(CloseIcon, styles, { allowMultiple: true })
