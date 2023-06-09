const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("SkateparkDb");
  db_connect
    .collection("ParkInfo")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

recordRoutes.post("/auth", function(request, response) {
	// Capture the input fields
	let user_name = request.body.user_name;
	let pass_word = request.body.pass_word;
	// Ensure the input fields exists and are not empty
	console.log(user_name)
  console.log(pass_word)
});

recordRoutes.post("/regi", function(request, response) {
	// Capture the input fields
	let user_name = request.body.user_name;
	let pass_word = request.body.pass_word;
  let e_mail = request.body.e_mail;
	// Ensure the input fields exists and are not empty
	console.log(user_name);
  console.log(pass_word)
  console.log(e_mail)
});


// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("ParkInfo")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new clip.
recordRoutes.route("/record/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    url: req.body.url,
    rating: req.body.rating,
    skateparkPost: ObjectId(req.params.id)
  };
  db_connect.collection("Clips").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});
//This adds a url, rating , and the skatepark that saved it to the Clips collection.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  //let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
      skateparkPost : ObjectId(req.params.id),
      url: req.body.url,
      rating: req.body.rating,
    };
  
  db_connect
    .collection("Clips")
    .insertOne(newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document uploaded");
      response.json(res);
    });
});
//Should get all the clips posted to a skatepark
recordRoutes.route("/clips/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { skateparkPost: ObjectId( req.params.id )};
  //let newvalues = {
    //$push: { youtube_videos: {
      //url: req.body.url,
      //rating: req.body.rating,
    //}
    //},
  //};
  db_connect
    .collection("Clips")
    .find(myquery)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

//Get all Clips 
recordRoutes.route("/clips").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("Clips")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});


// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});


module.exports = recordRoutes;
