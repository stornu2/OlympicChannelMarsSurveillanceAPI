'use strict';

const libraries = require('../base/libraries');
const presenter = require('../base/presenter');
const router = libraries.express.Router();

router.post('/remotecontrol', presenter.marsRemoteControl.example);

module.exports = router;