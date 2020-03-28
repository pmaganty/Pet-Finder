// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
//var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  //home page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    
  });

  //if user clicks "I lost a pet or I found a pet", go to page to enter info about themselves and pet
  app.get("/petInfo", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });

  app.post("/petInfo", function (req, res) {
    console.log(req.body);
  });

  //COPIED FROM OLDER PROJ BELOW
  /*app.post("/api/posts", function(req, res) {
    db.Post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });*/

};
