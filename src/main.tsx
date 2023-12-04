import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Global from './styles/global';

import { Home } from './components/Home';
import { About } from './components/About';
import { Login } from './components/Login';


ReactDOM.createRoot(document.getElementById('root') as HTMLAreaElement).render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Global />
      
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
