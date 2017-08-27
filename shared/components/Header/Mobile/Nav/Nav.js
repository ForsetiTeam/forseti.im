import React from 'react'
import { links } from 'helpers'

import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './Nav.scss'

import Item from './Item/Item'


@cssModules(styles)
export default class SubHeaderNav extends React.Component {

  render() {
    const nav = [
      { title: messages.perfumes, to: links.abs.home },
    ]

    return (
      <div styleName="navContainer">
        <div styleName="nav">
          {
            nav.map((item, index) => (
              <Item key={index} {...item} />
            ))
          }
        </div>
      </div>
    )
  }
}
