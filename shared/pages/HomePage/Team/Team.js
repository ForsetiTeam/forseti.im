import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Team.scss'

import Section from '../Section/Section'
import Title from '../Title/Title'
import Mates from './Mates/Mates'

import alexNikolaevAvatar from './images/alexnikolaev2.jpg'
import pavelIvanovAvatar from './images/pavelivanov2.jpg'
import denisKaiserAvatar from './images/deniskaiser2.jpg'
import vladinirManzukAvatar from './images/vladimirmanzuk2.jpg'
import noxonAvatar from './images/noxon2.jpg'
import andreyRebrovAvatar from './images/andreyrebrov.jpg'


const team = [
  {
    avatar: alexNikolaevAvatar,
    name: 'Alex Nikolaev',
    role: 'CEO',
  },
  {
    avatar: pavelIvanovAvatar,
    name: 'Pavel Ivanov',
    role: 'CTO',
  },
  {
    avatar: denisKaiserAvatar,
    name: 'Denis Kaiser',
    role: 'Blockchain developer',
  },
  {
    avatar: vladinirManzukAvatar,
    name: 'Vladimir Manzuk',
    role: 'Analyst',
  },
  {
    avatar: noxonAvatar,
    name: 'Alex Noxon',
    role: 'Adviser',
  },
  {
    avatar: andreyRebrovAvatar,
    name: 'Andrey Rebrov',
    role: 'Adviser',
  },
]

const Team = () => (
  <Section>
    <Title>Meet Forseti <b>Team</b></Title>
    <Mates mates={team} />
  </Section>
)

export default cssModules(Team, styles)
