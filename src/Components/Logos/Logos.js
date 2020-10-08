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
        <img className="logo" alt="reactLogo" title="React" src={reactLogo} />
        <img className="logo" alt="reduxLogo" title="Redux" src={reduxLogo} />
        <img className="logo" alt="nodeLogo" title="Node" src={nodeLogo} />
        <img className="logo" alt="javascriptLogo" title="JavaScript" src={javascriptLogo} />
        <img className="logo" alt="htmlLogo" title="HTML5" src={htmlLogo} />
        <img className="logo" alt="cssLogo" title="CSS3" src={cssLogo} />
    </div>
  );
}
export default Logos;
