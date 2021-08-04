const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response.js');
const router = express.Router();

let app = express();

app.use(bodyParser.json());
app.use(router);

app.get('/', function(req, res) {
    response.success(req, res, 'ok');
});

app.post('/', function (req, res) {
    response.success(req, res, 'ok');
});

app.use('/app', express.static('public'));

app.listen(3000);
console.log('localhost:3000')