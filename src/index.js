import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore } from 'redux';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers';

const store = createStore(rootReducer);
console.log(store);
// console.log('before-state', store.getState());


// store.dispatch({
//   type:'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// })

// console.log('after-state', store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);


reportWebVitals();
