import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Global from './styles/global';


import { Logged } from './components/pages/Logged';
import { Home } from './components/pages/Home';

import { AcessoProvider } from './components/contexts/login/ContextAcesso';
import { AcessoUseForm } from './components/contexts/login/ContextAcesso';

const { state } = AcessoUseForm();

ReactDOM.createRoot(document.getElementById('root') as HTMLAreaElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Global />
      <AcessoProvider>
      <Routes>
        { !state.logado ? ( 
          <Route path="/logged" element={< Logged />} />
        ): (
          <Route path="/" element={<Home />} />
        )};
      </Routes>
      </AcessoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
