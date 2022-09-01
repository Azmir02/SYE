import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './features/Store';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HelmetProvider><BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter></HelmetProvider>);

