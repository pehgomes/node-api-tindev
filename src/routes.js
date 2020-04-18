const express = require('express');
const DevController = require('./controller/DevController');
const LikeController = require('./controller/LikeController');
const DislikeController = require('./controller/DislikeController');

const routes = express.Router();

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

routes.post('/devs/:devIdLike/like', LikeController.store);
routes.post('/devs/:devIdLike/dislike', DislikeController.store);

module.exports = routes;
