import React from 'react'

import { FormattedMessage } from 'sb-react-intl'
import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './Team.scss'

import Section from '../Section/Section'
import Title from '../Title/Title'
import Mates from './Mates/Mates'

import sashaAvatar from './images/sasha.jpg'
import pashaAvatar from './images/pasha.jpg'
import denisAvatar from './images/denis.jpg'
import vovaAvatar from './images/vova.jpg'
import noxonAvatar from './images/noxon.jpg'
import andreyAvatar from './images/andrey.jpg'


const team = [
  {
    avatar: sashaAvatar,
    name: 'Alex Nikolaev',
    role: 'CEO',
  },
  {
    avatar: pashaAvatar,
    name: 'Pavel Ivanov',
    role: 'CTO',
  },
  {
    avatar: denisAvatar,
    name: 'Denis Kaiser',
    role: 'Blockchain developer',
  },
  {
    avatar: vovaAvatar,
    name: 'Vladimir Manzuk',
    role: 'Analyst',
  },
  {
    avatar: noxonAvatar,
    name: 'Alex Noxon',
    role: 'Adviser',
  },
  {
    avatar: andreyAvatar,
    name: 'Andrey Rebrov',
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
