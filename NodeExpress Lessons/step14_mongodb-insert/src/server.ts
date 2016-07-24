/// <reference path='../typings/tsd.d.ts' />

import express = require('express');
import path = require('path');

import bodyParser = require('body-parser');
import mongoose = require('mongoose');

var app : express.Express = express();

// view engine setup
app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'ejs'); 

app.use(express.static(path.join(__dirname, '/../public')));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


//Connect with MongoDB database
mongoose.connect('mongodb://localhost/todos');

//Schema
//Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
//The permitted SchemaTypes are: String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array

var todoSchema = new mongoose.Schema({ todo: String, time: Date })


//Model
//A model is a class with which we construct documents
//To use our schema definition, we need to convert our todoSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema):

var todoModel = mongoose.model('todos', todoSchema);

//Instances of Models are documents
var myTodo = new todoModel({ 
	todo: "Task 1", 
	time: new Date() 
});

//We have myTodo document! But we still haven't saved anything to MongoDB. 
//Each document can be saved to the database by calling its save method.
//The first argument to the callback will be an error if any occured & the second one is saved document.

myTodo.save(function (err, doc) {
  if (err){
	  console.log(err);
  } else {
	  console.log(doc);
  }
});


var port: number = process.env.PORT || 3000;
var server = app.listen(port, () => {
	var listeningPort: number = server.address().port;
	console.log('The server is listening on port: ' + listeningPort);
});

