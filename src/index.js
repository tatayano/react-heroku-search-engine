import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './containers/App'

import './index.css';

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
)