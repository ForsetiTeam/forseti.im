import React from 'react'

import { FormattedMessage } from 'sb-react-intl'
import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './HowItWorks.scss'

import Section from '../Section/Section'
import Title from '../Title/Title'

import schemeImage from './images/scheme.png'


const desc = `
  During the crowdsale, <b>Fors</b> tokens will be emitted.<br />
  Fors allows a discount of 60% for tokens of other projects in a pool during the auction.
  <br /><br />
  
  <h3>How the pool will be formed?</h3>
  <br />
  The pool will be filled from 2 sources:
  <br /><br />
  • Payment for connection to our services
  <br /><br />
  We charge a fee for the integration of our modules into other projects. It can be fixed as well, and to make a percentage from tokens of the project to which there is integration. 10% from this sum is to be the commission of Forseti, 90% go into pool.
  <br /><br />
  • Payment for use of our services
  <br /><br />
  After the integration of our solution, we take the commissions from transactions in our modules. For example, in the module of arbitration we take the commission from the sum allocated for arbitration
  
  <h3>Auction</h3>
  <br />
  The auction passes once a month at which owners of tokens can use a discount in 60% of market value and buy the tokens from other projects.
  <br /><br />
 
  • The user can buy tokens only once during each auction.<br />
  • During the auction functions of a transfer is inaccessible.<br />
  • The user can buy only the part of the pool proportional to its share in Forseti's tokens. For example, in a bullet at an auction there are 100 Eth, the owner of tokens has 10 Fors, at the general issue in 100 Fors. He can buy 10 Eth at a discount of 60%, t.e of 10 Eth for 4 Eth.<br />
  • All tokens which remained after the auction remain in a bullet.<br />
  • Tokens which do not bargain at the exchange from the approved list of the exchanges do not get into the auction.<br />
  <br /><br />
  
  <h3>Economy</h3>
  <br />
  Our project earns:
  <br /><br />
  • 10% of integration costs of our solution<br />
  • The funds received from the token sale at an auction.
`

const HowItWorks = () => (
  <Section>
    <Title {...messages.title} />
    <div styleName="content">
      <img styleName="schemeImage" src={schemeImage} />
      <div styleName="desc" dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  </Section>
)

export default cssModules(HowItWorks, styles)
