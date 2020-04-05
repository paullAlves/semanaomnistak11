const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const SessionController = require('./controllers/SessionController');

//Session Routes
routes.post('/sessions', SessionController.create);

//Ong Routes
routes.get('/ongs', OngController.list);
routes.post('/ongs', OngController.create);

//Incidents Routes
routes.get('/incidents', IncidentsController.list);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;