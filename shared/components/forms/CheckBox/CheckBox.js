import React, { Component } from 'react'
import PropTypes from 'sb-proptypes'
import { Input } from 'sb-valuelink'
import cx from 'classnames'
import { ignoreProps } from 'helpers'

import cssModules from 'react-css-modules'
import styles from './CheckBox.scss'


@cssModules(styles, { allowMultiple: true })
export default class CheckBox extends Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    label: PropTypes.any,
    valueLink: PropTypes.object,
  }

  static defaultProps = {
    className: '',
    checked: false,
    disabled: false,
  }

  render() {
    const { children, className, valueLink, checked, readOnly, ...rest } = this.props

    const checkboxStyleName = cx('checkbox', {
      'disabled': readOnly,
    })

    const inputElement = React.createElement(valueLink ? Input : 'input', {
      ...ignoreProps(rest, 'styles'),
      styleName: 'input',
      type: 'checkbox',
      disabled: readOnly,
      readOnly,
      checked,
      valueLink,
    })

    return (
      <label styleName="root" className={className}>
        {inputElement}
        <div styleName={checkboxStyleName} />
        {
          children && (
            <span styleName="label">{children}</span>
          )
        }
      </label>
    )
  }
}
