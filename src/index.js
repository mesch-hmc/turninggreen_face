import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FrontPage from './FrontPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
