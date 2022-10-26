import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

import App from './components/app.jsx';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <App />,
    root
  );
}
