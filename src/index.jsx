import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {CartContextProvider } from './store/CartContext';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCeBOn8JvOB2StNGjUVdYF49i6I37A0H4o",
  authDomain: "mercadoctrl.firebaseapp.com",
  projectId: "mercadoctrl",
  storageBucket: "mercadoctrl.appspot.com",
  messagingSenderId: "912012008952",
  appId: "1:912012008952:web:919ac3bf3b247ceba98a0d"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>

          <App />
       </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

