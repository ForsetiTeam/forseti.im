import React from 'react'
import moment from 'moment'
import cx from 'classnames'

import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './Roadmap.scss'

import Section from '../Section/Section'
import Title from '../Title/Title'


const steps = [
  {
    date: 1498867200000,
    title: 'Blockchain Hack 2017 Hackathon 3rd place (BlockJudge team), formation of team',
    details: 'Blockchain Hack 2017 Hackathon 3rd place (BlockJudge team), formation of team',
  },
  {
    date: 1504224000000,
    title: 'Development of the concept and architecture of Forseti',
    details: 'Разработка концепта и архитектуры Forseti',
  },
  {
    date: 1509494400000,
    title: 'Publication of the prototype of the module of the safe transaction and mechanism of resolution of disputes (Arbitration)',
    details: 'Публикация прототипа модуля безопасной сделки и механизма решения споров (Арбитраж)',
  },
  {
    date: 1512086400000,
    title: 'Pre-sale',
    details: 'Pre-sale',
  },
  {
    date: 1514764800000,
    title: 'MVP Publication. The module of reputation will additionally be presented in MVP, and modules of the safe transaction and the mechanism of resolution of disputes will be finished',
    details: 'В МВП будет дополнительно представлен модуль репутации и доработаны модули безопасной сделки и механизма решения споров',
  },
  {
    date: 1517443200000,
    title: 'TGE',
    details: 'Token Generation Event',
  },
  {
    date: 1519862400000,
    title: 'Entry into the exchanges',
    details: 'Выход на биржи',
  },
  {
    date: 1525132800000,
    title: 'Open beta and bug bounty',
    details: 'Open beta+ bug bounty',
  },
  {
    date: 1530403200000,
    title: 'Release in the Etherium main net',
    details: 'Релиз в мейннет эфириума',
  },
]

const now = moment.now()

const Roadmap = () => (
  <Section>
    {/*<div styleName="boxes">
      <div styleName="box box1" />
      <div styleName="box box2" />
      <div styleName="box box3" />
    </div>*/}
    <Title {...messages.title} />
    <div styleName="roadmap">
      {
        steps.map(({ date, title, details }, index) => {
          const styleName = cx('step', {
            'active': date <= now,
            'lastActive': date <= now && steps[index + 1].date > now,
            'pending': date > now && steps[index - 1].date <= now,
          })

          return (
            <div key={index} styleName={styleName}>
              <div styleName="point" />
              <div styleName="infoContainer">
                <div styleName="info">
                  <div styleName="date">{moment(date).format('MMM YYYY')}</div>
                  <div styleName="title">{title}</div>
                  <div styleName="details" dangerouslySetInnerHTML={{ __html: details }} />
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  </Section>
)

export default cssModules(Roadmap, styles, { allowMultiple: true })
