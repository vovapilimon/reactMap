import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/App'
import configureStore from './store/ConfigureStore'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
