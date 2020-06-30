import React from 'react';
import './Logos.css';

import cssLogo from '../../assets/css.png';
import htmlLogo from '../../assets/html.png';
import javascriptLogo from '../../assets/javascript.png';
import nodeLogo from '../../assets/node.png';
import reactLogo from '../../assets/react.png';
import reduxLogo from '../../assets/redux.png';

function Logos() {
  return (
    <div className="logos">
        <img className="logo" alt="reactLogo" src={reactLogo} />
        <img className="logo" alt="reduxLogo" src={reduxLogo} />
        <img className="logo" alt="nodeLogo" src={nodeLogo} />
        <img className="logo" alt="javascriptLogo" src={javascriptLogo} />
        <img className="logo" alt="htmlLogo" src={htmlLogo} />
        <img className="logo" alt="cssLogo" src={cssLogo} />
    </div>
  );
}
export default Logos;
