var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require("./routes.js");
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
  
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});

app.use("/",router);

module.exports = app;