import React from 'react'

import cssModules from 'react-css-modules'
import styles from './InsideLayout.scss'

import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'


@cssModules(styles)
export default class InsideLayout extends React.Component {

  render() {
    const { children } = this.props

    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}
