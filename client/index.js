import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';

import './styles/styles.scss';

import store from './store';

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Root {...store} />,
        document.getElementById('root')
    );
});