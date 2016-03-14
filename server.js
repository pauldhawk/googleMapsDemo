var fs          = require("fs");
var express     = require("express");
var https       = require('https');
var http        = require('http');
var bodyParser  = require('body-parser');

var HTTP_PORT   = 3000;
var HTTPS_PORT  = 3001;

var app         = express();

app.use(bodyParser.json());
app.use('/', express.static('public'));
app.get('/geo/:name', function (req, res, next) {
  var options = {
    root: __dirname + '/public/geojson/',
    dotfiles: 'allow',
    headers: {
        'Content-Type': 'application/json'
    }
  };

  var fileName = req.params.name;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });

});




var secureServer = https.createServer({
    key: fs.readFileSync('keys/private.key'),
    cert: fs.readFileSync('keys/certificate.pem')
  }, app)
  .listen(HTTPS_PORT, function () {
    console.log('https listening on port ' + HTTPS_PORT);
});

var insecureServer = http.createServer(app).listen(HTTP_PORT, function() {
  console.log('http listening on port  ' + HTTP_PORT);
})
