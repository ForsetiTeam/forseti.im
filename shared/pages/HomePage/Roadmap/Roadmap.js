import React from 'react'
import moment from 'moment'
import cx from 'classnames'

import cssModules from 'react-css-modules'
import styles from './Roadmap.scss'

import Section from '../Section/Section'
import Title from '../Title/Title'


const steps = [
  {
    date: 1498867200000,
    title: 'BlockchainHack 2017',
    details: 'Hackathon 3-е место (команда BlockJudge), формирование команды',
  },
  {
    date: 1504224000000,
    title: 'Разработка концепта и архитектуры Forseti',
    details: 'Разработка концепта и архитектуры Forseti',
  },
  {
    date: 1509494400000,
    title: 'Публикация прототипа модуля',
    details: 'Публикация прототипа модуля безопасной сделки и механизма решения споров (Арбитраж)',
  },
  {
    date: 1512086400000,
    title: 'Pre-sale',
    details: 'Pre-sale',
  },
  {
    date: 1514764800000,
    title: 'Публикация MVP',
    details: 'В МВП будет дополнительно представлен модуль репутации и доработаны модули безопасной сделки и механизма решения споров',
  },
  {
    date: 1517443200000,
    title: 'TGE',
    details: 'Token Generation Event',
  },
  {
    date: 1519862400000,
    title: 'Выход на биржи',
    details: 'Выход на биржи',
  },
  {
    date: 1525132800000,
    title: 'Open beta+ bug bounty',
    details: 'Open beta+ bug bounty',
  },
  {
    date: 1530403200000,
    title: 'Релиз в мейннет эфириума',
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
    <Title center>Roadmap</Title>
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
