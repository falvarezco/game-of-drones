import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import './fonts/Montserrat-BoldItalic.ttf';
import './fonts/Montserrat-MediumItalic.ttf';
import './fonts/Montserrat-Regular.ttf';

import App from './App';
import reducers from './store/reducers/reducers';

const middlewares = [thunk];
const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
