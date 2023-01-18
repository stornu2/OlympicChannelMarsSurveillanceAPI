'use strict';

// We import all the libraries used by the project.
require('dotenv').config({ silent: true })
const express = require('express');
const bodyParser = require('body-parser');

// We export all the libraries used by the project.
module.exports.express = express;
module.exports.bodyParser = bodyParser;