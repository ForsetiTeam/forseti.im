import React from 'react'
import { Flex, Box } from 'sb-flexbox'

import { FormattedHTMLMessage } from 'sb-react-intl'
import messages from './messages'

import cssModules from 'react-css-modules'
import styles from './HomeHero.scss'

import WidthContainer from 'components/WidthContainer/WidthContainer'
import Href from 'components/Href/Href'

import Nav from './Nav/Nav'
import Language from './Language/Language'


@cssModules(styles, { allowMultiple: true })
export default class HomeHero extends React.Component {

  render() {

    return (
      <div styleName="hero">

        <div styleName="boxes">
          <div styleName="boxGroup boxGroup1">
            <div styleName="box box1" />
            <div styleName="box box2" />
            <div styleName="box box3" />
            <div styleName="box box4" />
          </div>
          <div styleName="boxGroup boxGroup2">
            <div styleName="box box5" />
            <div styleName="box box6" />
          </div>
          <div styleName="box box7" />
          <div styleName="box box8" />
          <div styleName="box box9" />
          <div styleName="box box10" />
        </div>

        <WidthContainer>
          <Flex styleName="header" justify="space-between" align="center">
            <Box auto>
              <div styleName="logo">Forseti</div>
            </Box>
            <Box>
              <Nav />
            </Box>
            <Box>
              <Language />
            </Box>
          </Flex>
        </WidthContainer>
        <div styleName="content">
          <div styleName="centringContainer">
            <div styleName="centringContent">
              <FormattedHTMLMessage styleName="title" tag="div" {...messages.title} />
              <FormattedHTMLMessage styleName="subTitle" tag="div" {...messages.subTitle} />
              <div styleName="buttons">
                <Href styleName="button" customColor redirect="https://forseti.im/wp-draft-en.pdf" title={messages.whitePaper} />
                <Href styleName="button" customColor redirect="https://github.com/ForsetiTeam" title={messages.checkoutCode} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
