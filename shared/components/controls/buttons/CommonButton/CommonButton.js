import React from 'react'
import PropTypes from 'sb-proptypes'
import { ignoreProps } from 'helpers'

import messages from './messages'

import Button from 'components/controls/Button/Button'


const CommonButton = ({ h, title, ...props }) => {
  const titleKeys = 'accept back cancel confirm decline login finish reject save submit'.split(' ')
  const titleKey = titleKeys.filter((key) => Boolean(props[key]))[0]
  const rest = ignoreProps.call(null, props, ...titleKeys)

  if (!titleKey) {
    throw new Error(`There is no translation for key "${titleKey}" in CommonButton component`)
  }

  return (
    <Button h={h || 45} title={title || messages[titleKey]} {...rest} />
  )
}

CommonButton.propTypes = {
  h: PropTypes.number,
  title: PropTypes.object,
}

export default CommonButton
