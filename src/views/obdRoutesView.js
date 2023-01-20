'use strict';

// VIP constants.
const libraries = require('../base/libraries');
const presenter = require('../base/presenter');
const router = libraries.express.Router();

router.post('/remotecontrol', presenter.marsRemoteControlsPresenter.processRequest);

module.exports = router;