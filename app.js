var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    // stuff
    res.sendFile(path.join(__dirname, 'views/index.html'))
});

app.post('/api/shorten', function(req, res) {
    //stuff
});

app.get('/:encoded_id', function(req, res) {
    //stuff
});

var server = app.listen(PORT, function() {
    console.log('listening on port 3000...')
})