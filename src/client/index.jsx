import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App.jsx';

import './styles/main.less';

const $app = document.getElementById('app');

if ($app) {
  const root = createRoot($app);
  root.render(<App />);
} else {
  throw new Error('Element with id "app" not found');
}
