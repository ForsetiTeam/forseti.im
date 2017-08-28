import React from 'react'
import { Flex, Box } from 'sb-flexbox'

import cssModules from 'react-css-modules'
import styles from './HomeHero.scss'

import WidthContainer from 'components/WidthContainer/WidthContainer'
import Center from 'components/Center/Center'


@cssModules(styles, { allowMultiple: true })
export default class HomeHero extends React.Component {

  componentWillMount() {

  }

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
            <Box>
              <div styleName="logo">Forseti</div>
            </Box>
            <Box>
              <div styleName="nav">
                <div styleName="navItem">About</div>
                <div styleName="navItem">Features</div>
                <div styleName="navItem">Nutrition</div>
                <div styleName="navItem">Start now</div>
              </div>
            </Box>
          </Flex>
        </WidthContainer>
        <div styleName="content">
          <div styleName="centringContainer">
            <div styleName="centringContent">
              <div styleName="title">Decentralized economy need decentralized services</div>
              <div styleName="subTitle">&laquo; We provide <span>extremely amazing services</span> for your projects &raquo;</div>
              <div styleName="buttons">
                <a styleName="button" href="https://forseti.im/wp-draft-en.pdf" target="_blank">White Paper</a>
                <a styleName="button" href="https://github.com/ForsetiTeam" target="_blank">Checkout our code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
