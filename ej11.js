var express = require('express');
var app = express();
var path = require('path');
var port = 3000;

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/productos.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/productos.html'));
});

app.use(express.static(__dirname + '/css'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))