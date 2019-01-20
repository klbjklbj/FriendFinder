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
        var userResponses = userInput.scores;

        let lowestTotal = 500;

        for (let i = 0; i < friendData.length; i++) {

            console.log("i: " + i);
            console.log(friendData[i].scores);
            console.log(userInput.scores);
            var matchName;
            var matchImage;
            let currentTotal = 0;
            for (let j = 0; j < userResponses.length; j++) {

                let absVal = Math.abs(friendData[i].scores[j] - userResponses[j]);

                console.log("AV= " + absVal);
                currentTotal = currentTotal + absVal;
                console.log("currentTotal: " + currentTotal);
            }
            if (currentTotal < lowestTotal) {

                lowestTotal = currentTotal;
                console.log("lowestTot: " + lowestTotal);

                console.log("Your best match is " + friendData[i].name);
                console.log("Photo " + friendData[i].photo);
                console.log("*************************************");
                matchName = friendData[i].name;
				matchPhoto = friendData[i].photo;
            }
        }
        friendData.push(req.body); //pushes survey results to /api/friends to make list

        // Send appropriate response
        res.json({ status: 'OK', matchName: matchName, matchPhoto: matchPhoto });
    });
}

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.