import React from 'react';
import ReactDOM from 'react-dom/client';
//import './styles/global';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Global from './styles/global';

import { Login } from './components/pages/Login';
import { Home } from './components/pages/Home';
import { Recepcao } from './components/pages/Recepcao';
import { Design } from './components/pages/Design';
import { Producao } from './components/pages/Producao';
import { Acabamento } from './components/pages/Acabamento';
import { Expedicao } from './components/pages/Expedicao';
import { Administracao } from './components/pages/Administracao';


ReactDOM.createRoot(document.getElementById('root') as HTMLAreaElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Global />
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/" element={ <Home /> } />
        <Route path="/recepcao" element={ <Recepcao /> } />
        <Route path="/design" element={ <Design /> } />
        <Route path="/producao" element={ <Producao /> } />
        <Route path="/acabamento" element={ <Acabamento /> } />
        <Route path="/expedicao" element={ <Expedicao /> } />
        <Route path="/administracao" element={ <Administracao /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
