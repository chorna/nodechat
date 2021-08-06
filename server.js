const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes.js');
const config = require('./config.js');
const db = require('./db.js');

const user = encodeURIComponent(config.dbUser);
const password = encodeURIComponent(config.dbPassword);
const host = encodeURIComponent(config.dbHost);
const dataBase = encodeURIComponent(config.dbName);

db(`mongodb+srv://${user}:${password}@${host}/${dataBase}`);


let app = express();

app.use(bodyParser.json());
router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('localhost:3000')