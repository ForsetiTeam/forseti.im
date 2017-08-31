import React from 'react'
import { links } from 'helpers'
import cx from 'classnames'

import cssModules from 'react-css-modules'
import styles from './Logo.scss'

import Href from 'components/Href/Href'

import logoWhite from './images/white.svg'
import logoBlack from './images/black.svg'


const Logo = ({ titleExist, light, dark, ...rest }) => {
  const styleName = cx('logo', {
    light,
    dark,
  })

  return (
    <Href styleName={styleName} to={links.abs.home} {...rest}>
      <img styleName="image" src={logoBlack} />
      {
        titleExist && (
          <div styleName="title" role="title">Forseti</div>
        )
      }
    </Href>
  )
}

Logo.defaultProps = {
  titleExist: false,
}

export default cssModules(Logo, styles, { allowMultiple: true })
