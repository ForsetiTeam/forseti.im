import React from 'react'
import moment from 'moment'

import { FormattedMessage } from 'sb-react-intl'
import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './Achievements.scss'

import WidthContainer from 'components/WidthContainer/WidthContainer'

import Section from '../Section/Section'
import Title from '../Title/Title'

import blockchainhackImage from './images/blockchainhack.jpg'
import hypethonImage from './images/hypethon.jpg'
import icolabsImage from './images/icolabs.jpg'
import latokenImage from './images/latoken.jpg'


const achievements = [
  {
    image: blockchainhackImage,
    title: 'BlockchainHack <span>3d place</span>',
    date: 1498953600000,
  },
  {
    image: hypethonImage,
    title: 'Hypethon',
    date: 1502755200000,
  },
  {
    image: latokenImage,
    title: 'LAToken Hackathon <span>2d place</span>',
    date: 1506729600000,
  },
]

const Achievements = () => (
  <Section>
    <WidthContainer>
      <Title {...messages.title} />
      <div styleName="achievements">
        {
          achievements.map(({ image, title, date }, index) => (
            <div key={index}  styleName="achievement">
              <div styleName="image" style={{ backgroundImage: `url(${image})` }} />
              <div styleName="title" dangerouslySetInnerHTML={{ __html: title }} />
              <div styleName="date">{moment(date).format('DD MMM YYYY')}</div>
            </div>
          ))
        }
      </div>
    </WidthContainer>
  </Section>
)

export default cssModules(Achievements, styles)
