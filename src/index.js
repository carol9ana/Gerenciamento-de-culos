import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import './styles/styles.css';

const root = createRoot(document.getElementById('root'));
root.render(React.createElement(App));