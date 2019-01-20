// Dependencies

var path = require("path");


// Your htmlRoutes.js file should include two routes:

// A GET Route to /survey which should display the survey page.

// Exports the variable
module.exports = function(app){

    app.get('/survey', function (req, res) {

        res.sendFile(path.join(__dirname, "../public/survey.html"))

  });

  // sends any url but survey to home page  
  app.use( function (req, res) {

        res.sendFile(path.join(__dirname, "../public/home.html"))

  });


	
}