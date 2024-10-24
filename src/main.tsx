import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Global from './styles/global';

import { Home } from './components/pages/Home';
import { Logando } from './components/pages/logando';

// import { AcessoProvider } from './components/contexts/login/ContextAcesso';

ReactDOM.createRoot(document.getElementById('root') as HTMLAreaElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Global />
      {/* <AcessoProvider> */}
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/logando" element={<Logando />} />
      </Routes>
      {/* </AcessoProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
