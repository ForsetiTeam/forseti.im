import React from 'react'
import Collapse from 'react-collapse'
import cx from 'classnames'

import { FormattedMessage } from 'sb-react-intl'

import cssModules from 'react-css-modules'
import styles from './Mobile.scss'


@cssModules(styles, { allowMultiple: true })
export default class Mobile extends React.Component {

  state = {
    activeName: null,
  }

  changeActiveName = (name) => {
    const { activeName } = this.state

    this.setState({
      activeName: activeName === name ? null : name,
    })
  }

  render() {
    const { activeName } = this.state
    const { texts, services } = this.props

    return (
      <div styleName="content">
        {
          services.map((name) => {
            const { title, desc } = texts[name]
            const isOpened = name === activeName
            const styleName = cx('section', {
              'opened': isOpened,
            })

            return (
              <div key={name} styleName={styleName}>
                <div styleName="title" onClick={() => this.changeActiveName(name)}>
                  <div styleName="arrow" />
                  <FormattedMessage {...title} />
                </div>
                <Collapse
                  isOpened={isOpened}
                  springConfig={{ stiffness: 250, damping: 20 }}
                >
                  <div styleName="desc" dangerouslySetInnerHTML={{ __html: desc }} />
                </Collapse>
              </div>
            )
          })
        }
      </div>
    )
  }
}
