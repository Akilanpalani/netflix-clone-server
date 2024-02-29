const express = require('express');
const loginController = require('../controllers/login.control');

const authRoute = express.Router();

authRoute.post('/login', loginController);

module.exports = authRoute;
