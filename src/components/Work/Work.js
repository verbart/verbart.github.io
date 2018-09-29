import React, { Component } from 'react';
import './Work.scss';
import EyeSvg from './eye.svg';
import CodeSvg from './document-code.svg';

class Work extends Component {
  render() {
    const { work } = this.props;

    return (
      <div className="work">
        <div
          className="work__desktop"
          style={ { backgroundImage: `url(${ work.screenshotUrl })` } }
        >
          {/*<div className="work__links">*/}
            <a className="work__link" href={ work.codeUrl } target="_blank">
              <CodeSvg className="work__linkIcon" />
            </a>
            <a className="work__link" href={ work.liveUrl } target="_blank">
              <EyeSvg className="work__linkIcon" />
            </a>
          {/*</div>*/}
        </div>
      </div>
    );
  }
}

export default Work;
