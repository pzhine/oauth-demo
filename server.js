var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('./public'));

app.get('/oauth', function(req, res) {
  console.log(req);
  res.status(200).end();
});

app.listen(80, function() {
  console.log('server started on port 80')
});
