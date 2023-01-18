'use strict';

const libraries = require('../base/libraries');

class marsRemoteControls {
    /**
     * Function getCountDownTwoOptions: in charge of adding counter back for number of attempts
     * @param {JSON} req
     * @param {JSON} res
     */
    static async example(req, res) {
        try {
            res.setHeader('Content-Type', 'application/json');
            const option = {
                "VisitedCells": [
                    {
                        "X": 0,
                        "Y": 0
                    },
                    {
                        "X": 1,
                        "Y": 0
                    },
                    {
                        "X": 1,
                        "Y": 1
                    },
                    {
                        "X": 0,
                        "Y": 1
                    },
                    {
                        "X": 0,
                        "Y": 2
                    }
                ],
                "SamplesCollected": [
                    "Fe",
                    "Si",
                    "W"
                ],
                "Battery": 8,
                "FinalPosition": {
                    "Location": {
                        "X": 0,
                        "Y": 2
                    },
                    "Facing": "South"
                }
            }
            res.send(option);
            return null;
        } catch (err) { // Error
            console.error("Can't process request", err);
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