import React from 'react'
import { links } from 'helpers'
import cx from 'classnames'

import cssModules from 'react-css-modules'
import styles from './Logo.scss'

import Href from 'components/Href/Href'

// import logo from './images/logo.png'


const Logo = ({ titleExist, light, dark, ...rest }) => {
  const styleName = cx('logo', {
    light,
    dark,
  })

  return (
    <Href styleName={styleName} to={links.abs.home} {...rest}>
      {/*<img styleName="image" src={logo} />*/}
      {
        titleExist && (
          <div styleName="title" role="title">Forseti</div>
        )
      }
    </Href>
  )
}

Logo.defaultProps = {
  titleExist: true,
}

export default cssModules(Logo, styles, { allowMultiple: true })
