import React from 'react'
import { connect } from 'redaction/immutable'
import actions from 'redux/actions'
import { modals, links, resubscribeTypes, getFeatureToggle, features } from 'helpers'

import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './HamburgerButton.scss'

import DropDown from 'components/controls/DropDown/DropDown'
import Href from 'components/Href/Href'

import hamburgerIcon from './images/hamburger.svg'


@connect({
  isLoggedIn: 'auth.isLoggedIn',
  isSubscriptionUpgradable: 'subscription.isUpgradable',
  isResubscribeVisible: 'subscription.isCancelled',
})
@cssModules(styles)
export default class HeaderMobileHamburgerButton extends React.Component {

  nav = [
    { title: messages.sendGift, to: links.abs.home },
  ]

  render() {

    return (
      <DropDown className="dropDown" dropListClassName={styles.dropMenu}>
        <div styleName="hamburgerContainer">
          <div styleName="hamburger">
            <img src={hamburgerIcon} />
          </div>
        </div>
        {
          this.nav.map((item, index) => (
            <Href
              key={index}
              styleName="dropMenuItem"
              customColor
              {...item}
            />
          ))
        }
      </DropDown>
    )
  }
}
