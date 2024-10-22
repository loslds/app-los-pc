// models/db.js
const Sequelize = require('sequelize');

const sequelize = new Sequelize('jrbordados', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql' 
});

sequelize.authenticate()
  .then(function(){
    console.log('Sucesso conexão DB.');
  })
  .catch(function(){
    console.log('Erro de conexão DB.');
});

module.exports = sequelize;
