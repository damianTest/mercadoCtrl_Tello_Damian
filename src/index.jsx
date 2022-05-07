import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CartContext from './store/CartContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContext.Provider value = {{}}>
          <App />
       </CartContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

