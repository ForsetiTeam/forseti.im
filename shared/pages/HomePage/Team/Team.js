import React from 'react'
import { Flex, Box } from 'sb-flexbox'

import cssModules from 'react-css-modules'
import styles from './Team.scss'

import Section from '../Section/Section'
import Title from '../Title/Title'
import Mates from './Mates/Mates'

import alexNikolaevAvatar from './images/alexnikolaev.jpg'
import pavelIvanovAvatar from './images/pavelivanov.jpg'
import denisKaiserAvatar from './images/deniskaiser.jpg'
import vladinirManzukAvatar from './images/vladimirmanzuk.jpg'
import noxonAvatar from './images/noxon.jpg'


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
    role: 'CSA',
  },
  {
    avatar: vladinirManzukAvatar,
    name: 'Vladimir Manzuk',
    role: 'Analyst',
  },
]

const advisers = [
  {
    avatar: noxonAvatar,
    name: 'Alex Noxon',
    role: '',
  },
]

const Team = () => (
  <Section>
    <Flex>
      <Box styleName="team">
        <Title>Meet Forseti <b>Team</b></Title>
        <Mates mates={team} />
      </Box>
      <Box styleName="vr" />
      <Box styleName="advisers">
        <Title><b>Advisers</b></Title>
        <Mates advisers mates={advisers} />
      </Box>
    </Flex>
  </Section>
)

export default cssModules(Team, styles)
