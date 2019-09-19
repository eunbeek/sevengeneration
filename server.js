
var express = require("express");
var app = express();
var path = require("path");


var HTTP_PORT = process.env.PORT || 8080;

app.use(express.static("views"));
app.use(express.static("data"));

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "/views/index.html"));
    
});

// setup another route to listen on /about
// app.get("/about", function(req,res){
//   res.sendFile(path.join(__dirname, "/views/about.html"));
// });


// app.use(function(req, res) {
//   res.status(404).sendFile(path.join(__dirname, "/views/error.html"));
//   res.status(400).sendFile(path.join(__dirname, "/views/error.html"));
// });

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);