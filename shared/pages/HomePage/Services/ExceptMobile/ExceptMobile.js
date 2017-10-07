import React from 'react'
import cx from 'classnames'

import cssModules from 'react-css-modules'
import styles from './ExceptMobile.scss'

import ServiceIcon from 'components/ServiceIcon/ServiceIcon'


@cssModules(styles, { allowMultiple: true })
export default class ExceptMobile extends React.Component {

  state = {
    activeName: 'escrow',
  }

  changeActiveName = (name) => {
    this.setState({
      activeName: name,
    })
  }

  render() {
    const { activeName } = this.state
    const { texts, services } = this.props

    return (
      <div styleName="content">
        <div styleName="info">
          <div styleName="title">{texts[activeName].title}</div>
          <div styleName="desc" dangerouslySetInnerHTML={{ __html: texts[activeName].desc }} />
        </div>
        <div styleName="scheme">
          <div styleName="servicesContainer">
            <div styleName="forseti">F</div>
            <div styleName="lines">
              <div styleName="line" />
              <div styleName="line" />
              <div styleName="line" />
              <div styleName="line" />
              <div styleName="line" />
              <div styleName="line" />
            </div>
            <div styleName="services">
              {
                services.map((name, index) => {
                  const styleName = cx('serviceContainer', {
                    'active': activeName === name,
                  })

                  return (
                    <div key={index} styleName={styleName}>
                      <div styleName="service" onClick={() => this.changeActiveName(name)}>
                        {
                          React.createElement(ServiceIcon, {
                            styleName: 'icon',
                            [name]: true,
                          })
                        }
                      </div>
                      <FormattedMessage styleName="serviceTitle" tag="div" {...messages[name]} />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
