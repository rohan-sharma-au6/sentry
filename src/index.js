import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";


Sentry.init({
  dsn: "https://9ef97b256313435e971af6520362b01f@o464950.ingest.sentry.io/5476313",
  integrations: [
    new Integrations.BrowserTracing(),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter  >
        <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

