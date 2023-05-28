const modelRoutes = require('express').Router();

modelRoutes.use(require('../model/user.model'));
modelRoutes.use(require('../model/zone.model'));
modelRoutes.use(require('../model/encuesta.model'));

module.exports = modelRoutes;