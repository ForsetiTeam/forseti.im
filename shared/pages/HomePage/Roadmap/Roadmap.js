import React from 'react'
import moment from 'moment'
import cx from 'classnames'

import cssModules from 'react-css-modules'
import styles from './Roadmap.scss'

import Section from '../Section/Section'
import Title from '../Title/Title'


const steps = [
  {
    date: 1500688921323,
    title: 'R&D and licensing',
    details: `
      research of the African continent to identify the country that is politically stable and<br />
      reach in natural resources (gold ore). The Republic of Zambia, particularly the district of Kasempa,<br />
      was picked as the most promising and the process of obtaining mining licenses has been initiated.
    `,
  },
  {
    date: 1502688921323,
    title: 'R&D and licensing',
    details: `
      research of the African continent to identify the country that is politically stable and<br />
      reach in natural resources (gold ore). The Republic of Zambia, particularly the district of Kasempa,<br />
      was picked as the most promising and the process of obtaining mining licenses has been initiated.
    `,
  },
  {
    date: 1512688921323,
    title: 'R&D and licensing',
    details: `
      research of the African continent to identify the country that is politically stable and<br />
      reach in natural resources (gold ore). The Republic of Zambia, particularly the district of Kasempa,<br />
      was picked as the most promising and the process of obtaining mining licenses has been initiated.
    `,
  },
  {
    date: 1524688921323,
    title: 'R&D and licensing',
    details: `
      research of the African continent to identify the country that is politically stable and<br />
      reach in natural resources (gold ore). The Republic of Zambia, particularly the district of Kasempa,<br />
      was picked as the most promising and the process of obtaining mining licenses has been initiated.
    `,
  },
]

const now = moment.now()

const Roadmap = () => (
  <Section>
    <div styleName="boxes">
      <div styleName="box box1" />
      <div styleName="box box2" />
      <div styleName="box box3" />
    </div>
    <Title>Roadmap</Title>
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
