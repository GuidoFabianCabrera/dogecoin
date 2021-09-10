import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';

import HomePage from './pages/HomePage';

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);
