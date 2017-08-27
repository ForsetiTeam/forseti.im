import React from 'react'
import { intlShape, injectIntl, IntlProvider, addLocaleData, defineMessages, FormattedMessage } from 'react-intl'
import ignoreProps from 'helpers/ignoreProps'


const renderContent = (tag = 'span', props, ...children) =>
  React.createElement(tag, {
    ...ignoreProps(props, 'id', 'tagId', 'values', 'defaultMessage'),
    id: props.tagId,
  }, ...children)

const _FormattedMessage = ({ children, tag, ...rest }) => (
  <FormattedMessage {...rest}>
    {
      typeof children === 'function' ? children :
      (...result) => renderContent(tag, rest, ...result)
    }
  </FormattedMessage>
)

const _FormattedHTMLMessage = ({ children, tag, ...rest }) => (
  <FormattedMessage {...rest}>
    {
      typeof children === 'function' ? children :
      (result) => renderContent(tag, {
        dangerouslySetInnerHTML: { __html: result },
        ...rest,
      })
    }
  </FormattedMessage>
)


export {
  intlShape,
  injectIntl,
  IntlProvider,
  addLocaleData,
  defineMessages,
  _FormattedMessage as FormattedMessage,
  _FormattedHTMLMessage as FormattedHTMLMessage,
}
