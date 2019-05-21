import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import App from './components/App';
import reducers from './reducers';
import './index.css';

const logger = createLogger();
const store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector('#root')
);

