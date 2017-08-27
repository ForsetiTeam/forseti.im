import React from 'react'

import cssModules from 'react-css-modules'
import styles from './InsideLayout.scss'

import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'

import Banner from './Banner/Banner'


@cssModules(styles)
export default class InsideLayout extends React.Component {

  render() {
    const { children } = this.props

    return (
      <div styleName="wrapper">
        <Banner />
        <div styleName="headerContainer">
          <Header />
        </div>
        <div styleName="contentContainer">
          {children}
        </div>
        <div styleName="footerContainer">
          <Footer />
        </div>
      </div>
    )
  }
}
