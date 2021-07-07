const express = require('express');

const Employees= require('../employees/employeeModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/employees', (req, res) => {
Employees.getAll()
    .then(employee => {
      res.status(200).json(employee);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
