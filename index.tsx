import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Optional: if you have global styles

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Could not find root element to mount React app.");
}
