'use strict';

// VIP constants.
const view = require('./base/view');
const libraries = require('./base/libraries');

// Create the express server instance.
const expressServer = libraries.express();

// Use Node.js body parsing middleware.
libraries.express().use(libraries.bodyParser.json());
expressServer.use(
    libraries.bodyParser.urlencoded({
        extended: true,
    })
);

// Enable CORS for all routes and for our specific API-Key header.
expressServer.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, API-Key')
    next()
})

// Protect routes with an API-Key.
expressServer.use((req, res, next) => {
    const apiKey = req.get('API-Key')
    // This should be an environment variable.
    if (!apiKey || apiKey !== process.env.API_KEY) {
        res.status(401).json({ error: 'unauthorised' })
    } else {
        next()
    }
})

// Set the routes.
expressServer.use('', view.obdRoutesView);

// Start the server.
const server = expressServer.listen(process.env.PORT, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
})