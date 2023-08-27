import React from 'react';
//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import enrollmentReducer from './reducers/enrollmentReducer';

const store = createStore(enrollmentReducer);



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,

);






