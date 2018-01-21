import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import store from './models/userstore'

ReactDOM.render(
    <App store={store} />
	, document.querySelector('.container'));
