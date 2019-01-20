# FriendFinder
Find a Friend with this Node-based app featuring a 10-question compatibility survey. This full-stack site (built with Node Packages *Express*, *Body-Parser*, and *Path*, and also *JavaScript*, *JQuery*, *HTML*, *CSS*, and *Bootstrap* will take in results from user surveys, then compare their answers with those already in the list of possible friends. The app will then display the name and picture of the user with the best overall match to the submitted survey.

## Getting Started
Clone this repo to your local directory.

Go to your repo in your command terminal, and enter *npm install* to makes sure you have the required NPM packages to run this app.

Then to run this app locally go to your browser and navigate to http://localhost:8080/ (or substitute for 8080 whatever port the terminal message provided). This should bring you to the home page.

Currently there is some mock (think Simpsons) starter data in the *friends.js* file.  Feel free to change it as well as the questions in *survey.html* (think Simpsons again) to suit your tastes.

## Overview
The home page of the app provides the link to the survey as well as links to the API Friend List and the GitHub repo for this app.

The survey page has a 12-item questionnaire: name, photo link, and 10 questions to determine your best match from the current list of friends (which are found in the API Friend List).

After you hit the submit button the name and picture of your best match will be displayed in a modal box. Have fun!



