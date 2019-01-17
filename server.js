// Dependencies
var express = require("express");
// var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;

// CSS link
// app.use(express.static(__dirname + "/app/css"));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.text());
// app.use(bodyParser.json({type: "application/vnd.api+json"}));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTML/API Routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function(){
    console.log("App Listening on http://localhost:" + PORT);
});