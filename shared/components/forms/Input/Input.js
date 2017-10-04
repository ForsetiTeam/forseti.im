import React, { Component } from 'react'
import PropTypes from 'sb-proptypes'
import { Input as ValueLinkInput } from 'sb-valuelink'
import { FormattedMessage } from 'sb-react-intl'
import cx from 'classnames'
import { ignoreProps } from 'helpers'

import { injectIntl } from 'sb-react-intl'

import cssModules from 'react-css-modules'
import styles from './Input.scss'

import TextArea from 'components/forms/TextArea/TextArea'


@injectIntl
@cssModules(styles, { allowMultiple: true })
export default class Input extends Component {

  static propTypes = {
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    placeholder: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    type: PropTypes.string,
    valueLink: PropTypes.object.isRequired,
    focusOnInit: PropTypes.bool,
    multiline: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
  }

  static defaultProps = {
    className: '',
    inputClassName: '',
    focusOnInit: false,
    multiline: false,
    disabled: false,
    readOnly: false,
    required: false,
    type: 'text',
  }

  renderCommonParts() {
    const {
      intl, valueLink, inputClassName, label, placeholder, type,
      focusOnInit, multiline, disabled, readOnly, required, ...rest,
    } = this.props

    const value         = valueLink.value
    const valuePresent  = value !== null && value !== undefined && value !== '' && !Number.isNaN(value)

    const inputStyleName = cx('input', {
      'labelExist': !!label,
      'filled': valuePresent,
    })

    let placeholderValue = placeholder
    if (typeof placeholder === 'object') {
      placeholderValue = intl.formatMessage(placeholder)
    }

    const inputElement = React.createElement(multiline ? TextArea : ValueLinkInput, {
      ...ignoreProps(rest, 'styles', 'styleSpecial', 'rootClassName'),
      styleName: inputStyleName,
      className: inputClassName,
      placeholder: placeholderValue,
      valueLink,
      disabled: disabled || readOnly,
      required,
      autoFocus: !!focusOnInit,
      type,
      dir: 'auto',
    })

    let labelElement
    if (label) {
      labelElement = typeof label === 'string' ? (
        <label styleName="label">{label}</label>
      ) : (
        <FormattedMessage styleName="label" tag="label" {...label} />
      )
    }

    return (
      <div>
        {inputElement}
        {labelElement}
      </div>
    )
  }

  render() {
    const { valueLink, className, rootClassName, disabled, readOnly, hidden } = this.props

    const error = valueLink.error

    const rootStyleName = cx('root', {
      'disabled': disabled || readOnly,
      'errored': error,
      'hidden': hidden,
    })

    let errorNode

    if (error) {
      errorNode = typeof error === 'string' ? (
        <div styleName="error">{error}</div>
      ) : (
        <FormattedMessage styleName="error" tag="div" {...error} />
      )
    }

    return (
      <div role="InputComponent" className={className}>
        <div styleName={rootStyleName} className={rootClassName}>
          {this.renderCommonParts()}
        </div>
        {Boolean(error) && errorNode}
      </div>
    )
  }
}
