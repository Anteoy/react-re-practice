import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ClickCounter  from './ClickCounter';
import ConunterPanel  from './ControlPanel';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ConunterPanel />, document.getElementById('root'));
registerServiceWorker();
