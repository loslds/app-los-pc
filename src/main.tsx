import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Global from './styles/global';

import { Home } from './components/pages/Home';
import { Recepcao } from './components/pages/Recepcao';

import { About } from './components/pages/About';
import { Login } from './components/pages/Login';




ReactDOM.createRoot(document.getElementById('root') as HTMLAreaElement).render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Global />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/recepcao" element={ <Recepcao /> } />

        <Route path="/about" element={ <About /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/recepcao" element={ <Recepcao /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
