import React from 'react'

import cssModules from 'react-css-modules'
import styles from './DropMenu.scss'

import Href from 'components/Href/Href'
import DropDown from 'components/controls/DropDown/DropDown'


@cssModules(styles)
export default class SubHeaderDropMenu extends React.Component {

  render() {
    const { children, items } = this.props

    return (
      <DropDown dropListClassName={styles.dropMenu}>
        {children}
        {
          items.map((item, index) => (
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
