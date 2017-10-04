import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Mates.scss'


const Mates = ({ mates, advisers }) => (
  <div styleName="mates">
    {
      mates.map(({ avatar, name, role }, index) => (
        <div key={index} styleName="mateContainer">
          <div styleName="mate">
            <div styleName="avatar">
              <img src={avatar} />
            </div>
            <div styleName="info">
              {
                Boolean(role) && (
                  <div styleName="role">{role}</div>
                )
              }
              <div styleName="name">{name}</div>
            </div>
          </div>
        </div>
      ))
    }
  </div>
)

export default cssModules(Mates, styles)
