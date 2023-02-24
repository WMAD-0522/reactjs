import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* StrictMode is a dev tool provided by the React Library taht helps to identify the potentially issues and warn you about them.*/}
    <App />
  </React.StrictMode>
);
