import React from 'react'

import { FormattedMessage } from 'sb-react-intl'
import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './HowItWorks.scss'

import Section from '../Section/Section'
import Title from '../Title/Title'

import schemeImage from './images/scheme.png'


const desc = `
  На этапе краудсейла мы предлагаем токены <span>Fors</span>
  <br /><br />
  Данные токены дают право на скидку в 60% при покупке криптовалюты из пула.
  <br /><br />
  <h5>Пул криптовалют формируется из двух источников:</h5>
  <ul>
    <li>Плата за внедрение наших модулей</li>
    <li>Комиссии с транзакций внутри наших модулей</li>
  </ul>
  <br /><br />
  <h5>Выгода для инвестора:</h5>
  <ul>
    <li>Раз в месяц проходит аукцион, на котором владельцы токенов могут воспользоваться скидкой в 60% от биржевой стоимости и купить токены других проектов.</li>
    <li>Чем больше проектов используют наши модули, тем большие средства аккумулируется в пуле и тем большее количество криптовалюты может купить инвестор на аукционе</li>
    <li>Курс токена на бирже напрямую зависит от аккумулирующих средств в пуле. Forseti получает прибыль с продажи криптовалюты на аукционе, таким образом курс токена напрямую влияет на бизнес Forseti</li>
  </ul>
`

const HowItWorks = () => (
  <Section>
    <Title {...messages.title} />
    <div styleName="content">
      <div styleName="info">
        <div styleName="desc" dangerouslySetInnerHTML={{ __html: desc }} />
      </div>
      <div styleName="scheme">
        <img styleName="schemeImage" src={schemeImage} />
      </div>
    </div>
  </Section>
)

export default cssModules(HowItWorks, styles)
