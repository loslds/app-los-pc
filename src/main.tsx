import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Global from './styles/global';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Login1 from './components/pages/Login1';
import Login2 from './components/pages/Login2';
import Login3 from './components/pages/Login3';
//import Login4 from './components/pages/Login4';

import { MyAccount } from './components/pages/MyAccount';
import { Recepcao } from './components/pages/Recepcao';
import { Design } from './components/pages/Design';
import { Producao } from './components/pages/Producao';
import { Acabamento } from './components/pages/Acabamento';
import { Expedicao } from './components/pages/Expedicao';
import { Administracao } from './components/pages/Administracao';
import { Master } from './components/pages/Master';
import { Config } from './components/pages/Config';
import { TabPrc } from './components/pages/TabPrc';

import { AcessoProvider } from './components/contexts/login/ContextAcesso';

ReactDOM.createRoot(document.getElementById('root') as HTMLAreaElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Global />
      <AcessoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/login1" element={<Login1 />} />
          <Route path="/login2" element={<Login2 />} />
          <Route path="/login3" element={<Login3 />} />

          <Route path="/mayaccount" element={<MyAccount />} /> */}

          <Route path="/tabprc" element={<TabPrc />} />
          <Route path="/recepcao" element={<Recepcao />} />
          <Route path="/design" element={<Design />} />
          <Route path="/producao" element={<Producao />} />
          <Route path="/acabamento" element={<Acabamento />} />
          <Route path="/expedicao" element={<Expedicao />} />
          <Route path="/administracao" element={<Administracao />} />
          <Route path="/master" element={<Master />} />
          <Route path="/config" element={<Config />} />
        </Routes>
      </AcessoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
