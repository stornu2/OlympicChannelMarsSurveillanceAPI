'use strict';
const obdClass = require('../classes/class');

class initRemoteRequest {
    /**
     * terrain initRemoteRequest:  In charge of reading all the information coming from the request and work it.
     * @param {JSON} req
     * @param {JSON} res
     */
    static async terrain(req, res) {
        try {
            console.log('marsRemoteControls - terrain INIT req: %j', req);
            // TODO: Create al de logic to move the Rover on the terrain.
            console.log('marsRemoteControls - terrain ENDED res: %j', obdClass.result);
            return obdClass.result
        } catch (error) {
            console.VIPLog('marsRemoteControls - terrain ERROR: ', error);
            throw new Error(error)
        }
    }
}

module.exports = initRemoteRequest;