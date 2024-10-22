// server.js
const express = require("express");
const server = express();
const db = require('./models/db');

server.get('/', async (req , res) => {
  
  res.send('Serviço Home');

});

server.listen(8080, ()=>{
  console.log('Servidor inicializado na porta 8080: http://localhost:8080')
} );