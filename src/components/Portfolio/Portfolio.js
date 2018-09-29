import React, { Component } from 'react';
import './Portfolio.scss';
import Work from '../Work/Work';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <h1 style={{ textAlign: 'center' }}>My Works</h1>

        <div className="portfolio__works">
          { this.props.works.map( work => <Work key={ work.screenshotUrl } work={ work }/> )}
        </div>
      </div>
    );
  }
}

export default Portfolio;
