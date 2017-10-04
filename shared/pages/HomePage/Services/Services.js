import React from 'react'

import { FormattedMessage } from 'sb-react-intl'
import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './Services.scss'

import WidthContainer from 'components/WidthContainer/WidthContainer'
import ServiceIcon from 'components/ServiceIcon/ServiceIcon'

import Section from '../Section/Section'
import Title from '../Title/Title'


const services = 'escrow arbitrage reputation identity auction referral'.split(' ')

const Services = () => (
  <Section>
    <WidthContainer>
      <Title {...messages.title} />
      <div styleName="content">
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
            services.map((name, index) => (
              <div key={index} styleName="serviceContainer">
                <div styleName="service">
                  {
                    React.createElement(ServiceIcon, {
                      styleName: 'icon',
                      [name]: true,
                    })
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </WidthContainer>
  </Section>
)

export default cssModules(Services, styles)
