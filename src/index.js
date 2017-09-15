import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Page from './Page';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, hashHistory } from 'react-router';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
     <Provider store = {store}>
        <Page />
     </Provider>
, document.getElementById('root'));
registerServiceWorker();
