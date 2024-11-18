import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Global from './styles/global';

import { AcessoProvider } from './components/contexts/ContextAcesso';
import { AppRoutes } from './components/AppRoutes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Global />
      <AcessoProvider>
        <AppRoutes />
      </AcessoProvider>
    </BrowserRouter>
  </React.StrictMode>
);




  //import React from 'react';
//import ReactDOM from 'react-dom/client';

//import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Global from './styles/global';

// import { Logged } from './components/pages/Logged';
// import { Finalizado } from './components/pages/Finalizado';
// import { Home } from './components/pages/Home';

//import { AcessoProvider } from './components/contexts/login/ContextAcesso';
//import {AcessoUseForm, AcessoUseActions} from './components/contexts/login/ContextAcesso';

// const { state } = AcessoUseForm();

// ReactDOM.createRoot(document.getElementById('root') as HTMLAreaElement).render(
//  <React.StrictMode>
//    <BrowserRouter>
//      <Global />
//      <AcessoProvider>
//        <Routes>
//          { state.logado ? (
//            <Route path="/logged" element={<Logged />} />
//          ): (
//            <Route path="/" element={< Home/>} />
//            <Route path="/finalizado" element={<Finalizado />} />
//          )}
//        </Routes>
//      </AcessoProvider>
//    </BrowserRouter>
//  </React.StrictMode>
//);

