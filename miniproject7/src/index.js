import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BlogProvider } from './Context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BlogProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BlogProvider>
);
