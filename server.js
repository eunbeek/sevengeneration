
var express = require("express");
var app = express();
var path = require("path");
var info = require("./info.js");
const Sequelize = require('sequelize');

var HTTP_PORT = process.env.PORT || 8080;

app.use(express.static("views"));
app.use(express.static("data"));
app.use(express.static("CSS"));

var sequelize = new Sequelize('d5chnpfpodj8pd', 'zyzckazjznaqsr', 'fdabd3ca038118f8b71e90ebc9981eb08dcd0fc34066cebf632f0bce34995742', {
  host: 'ec2-107-20-167-241.compute-1.amazonaws.com',
  dialect: 'postgres',
  port: 5432,
  dialectOptions: {
      ssl: true
  }
});

sequelize
  .authenticate()
  .then(function() {
      console.log('Connection has been established successfully.');
  })
  .catch(function(err) {
      console.log('Unable to connect to the database:', err);
  });



function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

app.get("/", function(req,res){
    res.sendFile(path.join(__filename, "/views/index.html"));
    
});

app.get("/about", function(req,res){
  res.sendFile(path.join(__dirname, "/views/about.html"));
});

app.get("/interest", function(req,res){
  res.sendFile(path.join(__dirname, "/views/interest.html"));
});

app.get("/webfront", function(req,res){
  res.sendFile(path.join(__dirname, "/views/webfront.html"));
});

app.get("/info", function(req,res){
  res.sendFile(path.join(__dirname, "/views/info.html"));
});

app.get("/honesty", function(req,res){
  res.sendFile(path.join(__dirname, "/views/honesty.html"));
});

app.get("/allcustomer", function(req,res)
{

});
app.post("/submit", function(req,res)
{
  res.redirect("/info");
});

app.use(function(req, res) {
  res.status(404).sendFile(path.join(__dirname, "/views/error.html"));
  res.status(400).sendFile(path.join(__dirname, "/views/error.html"));
});

app.listen(HTTP_PORT, onHttpStart);