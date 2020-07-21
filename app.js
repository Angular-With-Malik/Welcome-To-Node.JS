var express = require('express');
var app = express();

app.listen(8080);

app.use('/msg', function (req, res) {
    res.send('Welcome To NodeJS !');
});
module.exports = app;
