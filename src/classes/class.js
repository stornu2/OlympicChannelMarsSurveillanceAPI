/**
 * * obstacleStrategyList: list of movements to avoid an obstacle.
 */
module.exports.obstacleStrategyList = {
    "attempt0": ["E", "R", "F"],
    "attempt1": ["E", "L", "F"],
    "attempt2": ["E", "L", "L", "F"],
    "attempt3": ["E", "B", "R", "F"],
    "attempt4": ["E", "B", "B", "L", "F"],
    "attempt5": ["E", "F", "F"],
    "attempt6": ["E", "F", "L", "F", "L", "F"]
}


/**
* * terrain: list of objects that are in the terrain.
* Fe: Ferrum. A deposit of iron. 
* Se: Selenium. A deposit of selenium. 
* W: Water. A deposit that contains water. 
* Si: Silicon. A deposit that contains silicon. 
* Zn: Zinc. A deposit that contains zinc. 
* Obs: An obstacle cell in which the robot can’t go. 
*/
module.exports.terrain = []


/**
* * battery: the amount of battery the rover has.
*/
module.exports.battery = 0

/**
* * commands: The movements the Rover has to do in secuence.
* Move Forward (F):  
*     Consumes 3 battery units. 
*     Move the unit one square forward in the current facing direction.
* Move Backwards (B): 
* 	Consumes 3 battery units. 
*     Move the unit one square backwards from the current facing direction. 
* Turn Left (L):  
*     Consumes 2 battery units. 
*     Changes the facing direction 90º to the right. 
* Turn Right (R): 
*     Consumes 2 battery units. 
*     Changes the facing direction 90º to the left. 
* Take Sample (S): 
*     Consumes 8 battery units. 
*     Takes and stores a sample of whatever material is primary in the current location. 
* Extend solar panels (E):  
*     Consumes 1 battery unit 
*     Recharges 10 battery units. 
*/
module.exports.commands = []




/**
* * exportsinitialPosition: It sets the initial position and facing of the Rober.
* facing can be this values.
*   North, 
*   East 
*   South 
*   West 
*/
module.exports.initialPosition = {
    "location": {
        "x": 0,
        "y": 0
    },
    "facing": ""
}


/**
* * resultExample: just to end to end testing purpose.
*/
module.exports.result = {
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

