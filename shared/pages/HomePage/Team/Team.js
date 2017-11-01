import React from 'react'

import { FormattedMessage } from 'sb-react-intl'
import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './Team.scss'

import Section from '../Section/Section'
import Title from '../Title/Title'
import Mates from './Mates/Mates'

import sashaAvatar from './images/sasha.jpg'
import denisAvatar from './images/denis.jpg'
import noxonAvatar from './images/noxon.jpg'


const team = [
  {
    avatar: sashaAvatar,
    name: 'Alex Nikolaev',
    role: 'CEO',
  },
  {
    avatar: denisAvatar,
    name: 'Denis Kaiser',
    role: 'Blockchain developer',
  },
  {
    avatar: noxonAvatar,
    name: 'Alex Noxon',
    role: 'Adviser',
  },
]

const Team = () => (
  <Section>
    <Title {...messages.title} />
    <Mates mates={team} />
  </Section>
)

export default cssModules(Team, styles)
