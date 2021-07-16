import React from 'react';
import ReactDOM from 'react-dom';

//store
import Store from 'store'

//pages
import Router from 'router';

//style
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <Router />
    </Store>
  </React.StrictMode>,
  document.getElementById('root'),
);
