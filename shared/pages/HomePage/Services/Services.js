import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Services.scss'

import WidthContainer from 'components/WidthContainer/WidthContainer'

import Section from '../Section/Section'
import Title from '../Title/Title'


const services = [
  {
    title: 'Escrow',
    desc: 'Safe deals service based on Smart Contract with no need for a client and a contractor to trust third party',
  },
  {
    title: 'Arbitrage',
    desc: 'Solves the trust problem between the parties parties of Commodity relations. In case of a conflict situation the parties may use the decentralized  arbitration mechanism and open a dispute which will be resolved by arbitrators',
  },
  {
    title: 'Reputation',
    desc: 'Reputation system designed in manner that motivates its users to make transaction fairly, hence income they earn depends on their reputation',
  },
  {
    title: 'Identity',
    desc: 'Unified history of: relationships, user\'s reputation in connected systems',
  },
  {
    title: 'Auction',
    desc: 'Decentralized auction system where the seller and the buyer are confide in the honesty of the results due to smart contracts',
  },
  {
    title: 'Referral Program',
    desc: 'Referral marketing is a process to encourage and significantly increase referrals from word of mouth, perhaps the oldest and most trusted marketing strategy',
  },
]

const Services = () => (
  <Section>
    <WidthContainer>
      <Title>What are Forseti services?</Title>
      <div styleName="services">
        {
          services.map(({ title, desc }, index) => (
            <div key={index} styleName="serviceContainer">
              <div styleName="service">
                <div styleName="title">{title}</div>
                <div styleName="desc">{desc}</div>
              </div>
            </div>
          ))
        }
      </div>
    </WidthContainer>
  </Section>
)

export default cssModules(Services, styles)
