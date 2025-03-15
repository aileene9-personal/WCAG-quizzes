import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import './index.css'
import App from './App.tsx'
import theme from './theme';

// Add CSP violation reporting
if (import.meta.env.DEV) {
  document.addEventListener('securitypolicyviolation', (e) => {
    console.log('CSP Violation:', {
      'Blocked URI': e.blockedURI,
      'Violated Directive': e.violatedDirective,
      'Original Policy': e.originalPolicy,
      'Disposition': e.disposition,
      'Document URI': e.documentURI,
      'Effective Directive': e.effectiveDirective,
      'Status Code': e.statusCode,
    });
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
