var express        = require('express');
var mongoose    = require('mongoose');
var bodyParser     = require('body-parser');
var cors           = require('cors');
var methodOverride = require('method-override');

var app            = express();

const port = 3000;

// Connection to DB


// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(cors());


// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Funciona!");
});
app.use(router);




// Start server
app.listen(port, function() {
  console.log("Node server running on http://localhost:3000");
});
