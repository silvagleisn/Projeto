const express = require('express');

const OngContorller = require('./controllers/OngController');
const IncidentsContorller = require('./controllers/IncidentsController');
const ProfileContorller = require('./controllers/ProfileController');
const SessionContorller = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionContorller.create);

routes.get('/ongs', OngContorller.index);
routes.post('/ongs', OngContorller.create);

routes.get('/profile', ProfileContorller.index);

routes.get('/incidents', IncidentsContorller.index);
routes.post('/incidents', IncidentsContorller.create);
routes.delete('/incidents/:id', IncidentsContorller.delete);

module.exports = routes;