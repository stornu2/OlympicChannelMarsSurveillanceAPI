'use strict';

// VIP constants.
const interactor = require('../base/interactor');

class marsRemoteControls {
    /**
     * Function marsRemoteControls: responsible for processing the input JSON with the necessary information to perform the Rover movements.
     * @param {JSON} req
     * @param {JSON} res
     */
    static async processRequest(req, res) {
        try {
            console.log('Started marsRemoteControls process');

            // Business logic
            let processResult = await interactor.terrainInteractor.terrain(req, res)

            console.log('Finishing marsRemoteControls process');

            // Set the headers and call the return function.
            res.setHeader('Content-Type', 'application/json');
            res.send(processResult);

        } catch (err) {
            console.error("processRequest: Can't process request", err);
            return res.status(500).json({
                status: {
                    code: 500,
                    errorType: err.message,
                },
            });
        }
    }
}

module.exports = marsRemoteControls;