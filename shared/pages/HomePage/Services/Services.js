import React from 'react'
import cx from 'classnames'

import { FormattedMessage } from 'sb-react-intl'
import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './Services.scss'

import WidthContainer from 'components/WidthContainer/WidthContainer'
import ServiceIcon from 'components/ServiceIcon/ServiceIcon'

import Section from '../Section/Section'
import Title from '../Title/Title'


const services = 'escrow arbitrage reputation identity auction referral'.split(' ')

const texts = {
  escrow: {
    title: 'Escrow',
    desc: `
      Сервис Escrow является гарантией исполнения условий сделки.
      Escrow - доверенная сторона в сделке между продавцом и покупателем, которая посредством залогов, страхует их от недобросовестного выполнения условий.
      В традиционных сервисах вы должны доверять третьей стороне, и все ваши деньги находятся у них.
      <br /><br />
      Умный контракт Escrow берет на себя роль  доверенной третьей стороны, которая собирает, хранит и распределяет средства, только тогда, когда продавец и покупатель удовлетворены результатом сделки.
    `,
  },
  arbitrage: {
    title: 'Арбитраж',
    desc: `
      Благодаря беспристрастности умных контрактов, большинство проблем связанных с доверием исчезают, т.к все условия контракта запрограммированы, и в процессе выполнения ни одна из сторон, не может их изменить.
      Но, к сожалению, <b>не все условия возможно описать, используя код</b>, следовательно будут возникать спорные ситуации, которые требуют решения.
      Механизм арбитража позволяет решать возникающие споры, в процессе товарно-денежных отношений.
      <br /><br />
      Договор о разрешении споров (DRC - Dispute Resolution Contract), является  независимым смарт-контрактом, используемым двумя (или более) сторонами для урегулирования любых споров, которые могут возникнуть во время контракта или транзакции.
    `,
  },
  reputation: {
    title: 'Репутация',
    desc: `
      Репутация очень важный элемент взаимоотношений на свободном рынке. Она позволяет оценить работу исполнителя\качество товара продавца, или наоборот, адекватность заказчика. Мы хотим чтобы, каждое взаимоотношение предусматривающее обмен активом\оказание услуги,  было оценено и записано в блокчейн и нашу идентификационную  систему.
      <br />
      Типичная система репутации включает пул участников, исполняющих протокол, который позволяет пользователям оставлять отзывы об их взаимодействии друг с другом. Репутация накапливается со временем и может быть запрошена другими пользователями в системе.
    `,
  },
  identity: {
    title: 'Идентификация',
    desc: `
      Механизм Идентификации, одна из самых важных частей децентрализованного приложения . Особенно это важно для бизнеса, в которых важно знать репутацию человека с которым ты взаимодействуешь.
      <br /><br />
      При проектирование такой системы нам важно сохранить баланс между анонимностью и случаями, когда люди будут вынуждены подтвердить свою личность для совершения действия, например перед предоставление услуг клиентам , сервис может обязать продавца  пройти KYC.
    `,
  },
  auction: {
    title: 'Аукицион',
    desc: `
      Децентрализованная система аукциона, где продавец и покупатель уверены в честности результатов. 
      <br /><br />
      В Текущих аукционных системах недобросовестный владелец системы может злоупотреблять своими полномочиями, и давать неправомерное преимущество
      некоторым участникам системы. Из за этого обычный пользователь может чувствовать себя незащищенным по отношению к привилегированным пользователям, и никак не может проверить честность работы системы
      <br /><br />
      Благодаря Смарт контрактам, мы можем обеспечить честность выполнения бизнес логики, и безопасность данных пользователя
    `,
  },
  referral: {
    title: 'Рефералка',
    desc: `Описание`,
  },
}

@cssModules(styles, { allowMultiple: true })
export default class Services extends React.Component {

  state = {
    activeName: 'escrow',
  }

  changeActiveName = (name) => {
    this.setState({
      activeName: name,
    })
  }

  render() {
    const { activeName } = this.state

    return (
      <Section>
        <WidthContainer>
          <Title {...messages.title} />
          <div styleName="content">
            <div styleName="info">
              <div styleName="title">{texts[activeName].title}</div>
              <div styleName="desc" dangerouslySetInnerHTML={{ __html: texts[activeName].desc }} />
            </div>
            <div styleName="scheme">
              <div styleName="servicesContainer">
                <div styleName="forseti">F</div>
                <div styleName="lines">
                  <div styleName="line" />
                  <div styleName="line" />
                  <div styleName="line" />
                  <div styleName="line" />
                  <div styleName="line" />
                  <div styleName="line" />
                </div>
                <div styleName="services">
                  {
                    services.map((name, index) => {
                      const styleName = cx('serviceContainer', {
                        'active': activeName === name,
                      })

                      return (
                        <div key={index} styleName={styleName}>
                          <div styleName="service" onClick={() => this.changeActiveName(name)}>
                            {
                              React.createElement(ServiceIcon, {
                                styleName: 'icon',
                                [name]: true,
                              })
                            }
                          </div>
                          <FormattedMessage styleName="serviceTitle" tag="div" {...messages[name]} />
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </WidthContainer>
      </Section>
    )
  }
}
