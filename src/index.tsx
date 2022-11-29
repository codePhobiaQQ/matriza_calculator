import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ---- Styles ----
import "./styles/main.sass"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
