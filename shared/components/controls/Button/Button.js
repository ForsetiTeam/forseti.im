import React from 'react'
import { mapValues, keyBy } from 'lodash'
import { ignoreProps } from 'helpers'
import cx from 'classnames'

import { FormattedMessage } from 'sb-react-intl'

import cssModules from 'react-css-modules'
import styles from './Button.scss'

import Href from 'components/Href/Href'


const Button = (props) => {

  const width         = props.w || props.width
  const height        = props.h || props.height
  const buttonStyle   = {}
  const arrowStyle    = {}

  let pl // padding left
  let pr // padding right
  const px = props.smallPadding ? Math.floor(height / 3) : height // horizontal padding
  const fs = height < 25 ? 10 : Math.floor(height / 2.5) // font size

  pl = pr = px

  if (props.arrowed) {
    pl = height
    pr = px * 2 + height
  }

  if (width) {
    buttonStyle.width = `${width}px`
  }

  buttonStyle.height      = `${height}px`
  buttonStyle.lineHeight  = `${height}px`
  buttonStyle.padding     = `0 ${pr}px 0 ${pl}px`
  buttonStyle.fontSize    = `${fs}px`
  arrowStyle.transform    = `translateX(-${px}px)`
  arrowStyle.right        = `${px}px`

  const colors = [
    'brand',
    'gray',
    'emptyGray',
    'white',
    'emptyBrand',
    'danger',
    'disabled',
  ]
  
  const styleName = cx('button', {
    'fullWidth': props.fullWidth,
    ...mapValues(keyBy(colors, (name) => name), (name) => props[name])
  })

  const restProps = ignoreProps(props,
    'styles',
    'title',
    'w',
    'width',
    'h',
    'height',
    'submit',
    'fullWidth',
    'uppercase',
    ...colors,
  )

  const elProps = {
    ...restProps,
    styleName,
    style: buttonStyle,
  }

  if (props.to) {
    elProps.to = props.to
    elProps.customColor = true
  }
  else if (props.redirect) {
    elProps.redirect = props.redirect
    elProps.customColor = true
  }

  let node = 'div'

  if (props.to || props.redirect) {
    node = Href
  }
  else if (props.nodeType) {
    node = props.nodeType
  }

  let content

  if (props.title) {
    content = typeof props.title === 'string' ? (
      <span>{props.title}</span>
    ) : (
      <FormattedMessage {...props.title} />
    )
  }
  else {
    content = props.children
  }

  return React.createElement(
    node,
    elProps,
    content,
  )
}

Button.defaultProps = {
  h: 40,
}

export default cssModules(Button, styles, { allowMultiple: true })
