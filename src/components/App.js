import React, { Component } from 'react';
import Portfolio from './Portfolio/Portfolio';

class App extends Component {
  state = {
    works: [
      {
        screenshotUrl: 'https://raw.githubusercontent.com/verbart/portfolio-old/master/src/assets/images/works/bigfix.png',
        codeUrl: 'https://github.com/verbart/bigfix',
        liveUrl: 'https://bigfix.biz'
      },
      {
        screenshotUrl: 'https://raw.githubusercontent.com/verbart/portfolio-old/master/src/assets/images/works/cryptinvest.png',
        codeUrl: 'https://github.com/verbart/cryptinvest',
        liveUrl: 'http://cryptinvest.biz'
      },
      {
        screenshotUrl: 'https://raw.githubusercontent.com/verbart/portfolio-old/master/src/assets/images/works/avarcom.png',
        codeUrl: 'https://github.com/verbart/avarcom',
        liveUrl: 'https://аварийный-комиссар-бесплатно.рф'
      },
      {
        screenshotUrl: 'https://raw.githubusercontent.com/verbart/portfolio-old/master/src/assets/images/works/business-landing.png',
        codeUrl: 'https://github.com/verbart/business-landing',
        liveUrl: 'https://verbart.github.io/business-landing/dist'
      },
      {
        screenshotUrl: 'https://raw.githubusercontent.com/verbart/portfolio-old/master/src/assets/images/works/easylang.png',
        codeUrl: 'https://github.com/verbart/easylang',
        liveUrl: 'https://verbart.github.io/business-landing/dist'
      }
    ]
  };

  render() {
    return (
      <Portfolio works={ this.state.works }/>
    )
  }
}

export default App;
