import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter } from 'react-router-dom'

import { Auth0Provider } from '@auth0/auth0-react'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { reducers } from './reducers'

import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    > 
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Auth0Provider>
  </Provider>,
  document.getElementById('root')
);
