const express = require('express');
const registerUser = require('../controllers/user.control');

const route = express.Router();

route.post('/register', registerUser);

module.exports = route;
