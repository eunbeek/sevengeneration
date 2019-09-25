
var express = require("express");
var app = express();
var path = require("path");


var HTTP_PORT = process.env.PORT || 8080;

app.use(express.static("views"));
app.use(express.static("data"));
app.use(express.static("CSS"));


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

app.use(function(req, res) {
  res.status(404).sendFile(path.join(__dirname, "/views/error.html"));
  res.status(400).sendFile(path.join(__dirname, "/views/error.html"));
});

app.listen(HTTP_PORT, onHttpStart);