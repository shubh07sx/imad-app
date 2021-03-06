var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/home/shubh/Desktop/webapp/imad-app/ui/jj.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jj.jpg'));
});
  app.get('/home/shubh/Desktop/webapp/imad-app/ui/wallpaper.jpg', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'wallpaper.jpg'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 9123;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
