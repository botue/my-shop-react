import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"

import { store } from './redux/store';
import { Provider } from 'react-redux';

import Layout from './containers/Layout'
import './index.scss'

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter basename="/my-shop-react">
        <Provider store={store}>
          <Layout />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
