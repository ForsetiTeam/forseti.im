import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Follow.scss'

import Socials from 'components/Socials/Socials'


const Follow = () => (
  <div styleName="container">
    <Socials
      emptyBlack
      links={{
        facebook: 'https://www.facebook.com/forseti.im',
        twitter: 'https://twitter.com/forseti_im',
        telegram: 'https://t.me/forseti_channel',
        github: 'https://github.com/ForsetiTeam',
        mail: 'mailto:welcome@forseti.im',
      }}
    />
  </div>
)

export default cssModules(Follow, styles)
