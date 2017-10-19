import React from 'react'
import { connect } from 'redaction/immutable'

import cssModules from 'react-css-modules'
import styles from './Follow.scss'

import Socials from 'components/Socials/Socials'


const Follow = ({ lang }) => (
  <Socials
    styleName="socials"
    emptyWhite
    links={{
      facebook: 'https://www.facebook.com/forseti.im',
      twitter: 'https://twitter.com/forseti_im',
      telegram: `https://t.me/forseti_${lang}_chat`,
      github: 'https://github.com/ForsetiTeam',
      mail: 'mailto:welcome@forseti.im',
    }}
  />
)

export default connect({
  lang: 'ui.locale',
})(cssModules(Follow, styles))
