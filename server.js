const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes.js');

let app = express();

app.use(bodyParser.json());
router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('localhost:3000')