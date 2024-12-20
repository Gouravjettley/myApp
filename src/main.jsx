import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx';
import {NextUIProvider} from '@nextui-org/react';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
const app = (
  <Auth0Provider
    domain="dev-hkgltzyon2r1ztuk.us.auth0.com"
    clientId="2F9R6yH7nuRtyBR2XeQTO98Gr6OFqaIe"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <NextUIProvider>
      <App />
    </NextUIProvider>
    </Auth0Provider>
);

ReactDOM.render(app, document.getElementById('root'));
