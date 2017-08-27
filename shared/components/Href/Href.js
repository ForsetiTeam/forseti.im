import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'sb-proptypes'
import { ignoreProps } from 'helpers'
import cx from 'classnames'
import config from '@eagle/app-config'

import { FormattedMessage } from 'sb-react-intl'

import cssModules from 'react-css-modules'
import styles from './Href.scss'


const Href = ({
  children, title, to, toOLD, redirect, mailto,
  blackColor, brandColor, blackToBrandColor, customColor,
  ...rest,
}) => {

  const styleName = cx('link', {
    'commonColor': !customColor && !brandColor && !blackColor,
    'brandColor': brandColor,
    'blackColor': blackColor,
    'blackToBrandColor': blackToBrandColor,
  })
  
  const props = ignoreProps(rest, 'activeClassName')

  let content = children

  if (typeof title === 'object') {
    content = (
      <FormattedMessage {...title} />
    )
  }
  else if (title) {
    content = title
  }

  if (!to && !toOLD && !redirect && !mailto) {
    return (
      <span styleName={styleName} {...props}>
        {content}
      </span>
    )
  }

  if (typeof to !== 'undefined') {
    return (
      <Link styleName={styleName} to={to} {...rest}>
        {content}
      </Link>
    )
  }

  if (typeof redirect !== 'undefined' || typeof toOLD !== 'undefined') {
    let url
    if (toOLD) {
      if ([ 'development', 'localtest' ].includes(config.propENV)) {
        url = config.services.base + toOLD.replace(/^\//, '')
      } else {
        url = `${window.location.origin}/${toOLD.replace(/^\//, '')}`
      }
    }

    return (
      <a
        styleName={styleName}
        href={redirect || url}
        target={redirect ? '_blank' : null}
        rel="noopener noreferrer nofollow"
        {...props}
      >
        {content}
      </a>
    )
  }

  if (typeof mailto !== 'undefined') {
    return (
      <a
        styleName={styleName}
        href={`mailto:${mailto}`}
        {...props}
      >
        {content || mailto}
      </a>
    )
  }
}

Href.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  redirect: PropTypes.string,
  mailto: PropTypes.string,
  brandColor: PropTypes.bool,
  blackColor: PropTypes.bool,
  blackToBrandColor: PropTypes.bool,
  customColor: PropTypes.bool,
}

Href.defaultProps = {
  brandColor: false,
  blackColor: false,
  customColor: false,
}

export default cssModules(Href, styles, { allowMultiple: true })
