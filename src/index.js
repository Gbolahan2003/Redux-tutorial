import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  allReducer from './reducers';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
// const increment =()=>{
//   return {
//     type:
// 'increment'
//   }
// }
// const decrement=()=>{
//   return {
//     type: 'decrement'
//   }
// }
// const counter = (state= 0, action)=>{
//    switch(action.type) {
//     case 'increment':
//       return state + 1;
      
//       case 'decrement':
//         return state -1 ;
    
//    }
// }
// let store = createStore(counter)
//  store.subscribe(()=> console.log(store.getState()))

//  store.dispatch(increment())
// store -> globalized state 

// Action increment
// reducer
// dispatch

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
