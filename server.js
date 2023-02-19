const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Static files js, img....
// https://expressjs.com/en/starter/static-files.html
app.use('/capture-photo', express.static(path.join(__dirname, '/capture-photo/public')))

// Send files
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/capture-photo', function(req, res) {
    res.sendFile(path.join(__dirname, '/capture-photo/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
