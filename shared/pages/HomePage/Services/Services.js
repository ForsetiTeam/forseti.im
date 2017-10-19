import React from 'react'
import Media from 'sb-media'

import { FormattedMessage } from 'sb-react-intl'
import messages from './messages'

import WidthContainer from 'components/WidthContainer/WidthContainer'

import Section from '../Section/Section'
import Title from '../Title/Title'

import ExceptMobile from './ExceptMobile/ExceptMobile'
import Mobile from './Mobile/Mobile'


const services = 'escrow arbitrage reputation identity auction referral'.split(' ')

const texts = {
  escrow: {
    title: messages.escrow,
    desc: `
The ICO Escrow service provides a specialized smart contract controlling the sum collected during Crowdsale / ICO.<br /><br />
• The money received during ICO will be unblocked on achievement of milestones designated in the road map of the project by vote of escrow of agents, or holders of tokens.<br /><br /> 
• As the vote function starts, holders of tokens begin to audit the finished work for the previous reporting period, and have a possibility of voting for unblocking the following portion of the funds.<br /><br />
• At successful completion of a vote, the requested funds are transferred to a wallet of the team on the project, and the milestone is considered to be successfully completed.<br /><br />
Such a service allows the startups coming to ICO to increase trust to the project and to provide transparency of the performance of goals.<br />
For the investor, it gives additional protection against loss of money.
    `,
  },
  arbitrage: {
    title: messages.arbitrage,
    desc: `
Thanks to the impartiality of smart contracts, a majority of the problems connected with trust disappear, as all terms of the contract are programmed, and in the course of performance, none of the parties can change them.
But it is impossible to describe, unfortunately, all conditions using a code therefore there will be disputable situations which require solutions.
The mechanism of arbitration allows us to solve arising disputes, in the course of the commodity-money relationship. At the moment, we have the cross-border system of transfer of values, communication systems, etc. So why do we have to address our local courts, or arbitrators for the solution of disputable situations?
The decentralized world and the decentralized systems demand a more perfect mechanism of solutions to disputable situations. 
Such a mechanism will demand the following characteristics:
<br /><br />
• The Dispute Resolve Contract (DRC) which is the independent smart contract used by two (or more) parties for resolution of any disputes which can arise during the contract or transaction.<br /><br />
• For example, if Alice (buyer) wants to buy a TV from Bob (seller), then Alice and Bob can use DRC for the solution to any disputes resulting from the sale. In this case, Alice and Bob would be two parties participating in DRC.<br /><br />
• DRC can hold funds in escrow or be a part of the multi-stage contract. DRC includes the interface allowing any of the parties to initiate the claim for claims and ADR mechanisms for resolutions of the dispute – for example, standard arbitration, a vote pool with involvement of experts in the field (Specialized Arbitration) or any other mechanisms.<br /><br />
• DRC will be financed by bargaining parties, for example by Alice and Bob and their funds can also be used for an ADR fee.<br /><br />
• If during the period of validity of the contract there are no disputes, both parties can agree to DRC cancellation. If this term comes to an end and none of the parties initiated a dispute, DRC will stop its existence automatically.
    `,
  },
  reputation: {
    title: messages.reputation,
    desc: `
Reputation is a very important element of relationships on the free market. It allows us to estimate the work of the contractor//the quality of goods of the seller, or on the contrary, to the adequacy of the customer. We want each relationship providing exchanges of the asset //rendering service, to be estimated and written down in the blockchain and in our identification system.<br /><br /> 
The typical system of reputation includes a pool of participants executing the protocol which allows users to leave comments about their interaction with each other. Responses, or feedback consists of numerical estimates (for example, 1-5 stars) and/or the short message. Reputation collects over time and can be requested by other users in the system.
    `,
  },
  identity: {
    title: messages.identity,
    desc: `
The Identification mechanism is one of the most important parts of the decentralized application. It is especially important for businesses in which it is important to know the reputation of the person with whom you interact.
During the design of such systems, it is important for us to keep a balance between anonymity and cases when people are forced to confirm the personality for acting. For example, before rendering services to clients, services can oblige the seller to pass KYC.
<br /><br />
The second important factor of a design, or a selection of an identification system, is that we are going to keep the reputation of the user and history of his or her interactions in the services using our module of identification.
At the moment, there is no ready solution that meets our needs. Therefore we plan to make modifications or integrations into already existing decisions, for example: 
<br /><br />
• keybase.io <br />
• uPort
<br /><br />
Or develop of own solution.
    `,
  },
  auction: {
    title: messages.auction,
    desc: `
The decentralized system of an auction where the seller and the buyer are assured of honesty in the results.<br /> 
In the current auction systems, the unfair owner of a system can abuse the powers and give illegal advantages to some participants of the system. Because of this, the ordinary user can feel unprotected in relation to exclusive users, and cannot check the honesty of the system in any way.
Due to smart contracts, we can provide honesty of performance of business logic, and data safety for the user.
<br /><br />
Logic of the simplest auction:
<br /><br />
• The user A (seller) announces a subject for sale, its initial cost, and a limit of time.
<br /><br />
• The interested buyers can stake, before a limit.
<br /><br /> 
• At a victory of one of sellers, his or her money is deposited into an escrow account until delivery.
<br /><br />
Furthermore, we plan to realize:
<br /><br />
• Texas auction<br />
• Return auction
    `,
  },
  referral: {
    title: messages.referral,
    desc: `Will be soon...`,
  },
}

const Services = () => (
  <Section>
    <WidthContainer>
      <Title {...messages.title} />
      <Media mobile>
        {
          (isMatched) => React.createElement(isMatched ? Mobile : ExceptMobile, {
            services,
            texts,
          })
        }
      </Media>
    </WidthContainer>
  </Section>
)

export default Services
