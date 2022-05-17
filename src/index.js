import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers';

//middleware function
// const logger = function ({dispatch, getState}) {
//   return function(next) {
//     return function (action) {
//       console.log('ACTION_TYPE=', action.type);
//       next(action);
//     }
//   }
// }

//middleware function short form
const logger = ({dispatch, getState}) => (next) => (action) => {
  if(typeof action!== 'function') {
    console.log('ACTION_TYPE=', action.type);
  }
  
      next(action);
}

const thunk = ({dispatch, getState}) => (next) => (action) => {
  if(typeof action === 'function') {
    action(dispatch);
    return;
  }
      next(action);
}

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
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
