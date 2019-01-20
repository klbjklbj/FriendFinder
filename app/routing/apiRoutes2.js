// Dependencies

var path = require("path"); //needed here?
var friendData = require('../data/friends.js');

// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {

        // req.body is available since we're using the body parsing middleware

        var userInput = req.body; //new user

        // console.log("userInput:" + userInput); //new user

        // for(let i=0; i<friendData.length; i++)
        // console.log("friendDate:" + friendData[i].scores); //entire friend list on api page

        let currentTotal = 0;
        let lowestTotal = 500;

        for (let i = 0; i < friendData.length; i++) {
            
            console.log("i: "+i);
            console.log(friendData[i].scores);
            console.log(userInput.scores);

            for (let j = 0; j < friendData[i].scores.length; j++) {
                let currentTotal=0;
                let absVal = Math.abs(userInput.scores[j] - friendData[i].scores[j]);

                console.log("AV= " + absVal);
                currentTotal = currentTotal + absVal;
                console.log("currentTotal: " + currentTotal);
            }
            if (currentTotal < lowestTotal) {

                lowestTotal = currentTotal;
                console.log("lowestTot: " + lowestTotal);
                
                console.log("Your best match is " + friendData[i].name);
                // currentTotal = 0;
                // lowestTotal=5000;                
            }

        }

        friendData.push(req.body); //pushes survey results to /api/friends to make list

    });
}

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.