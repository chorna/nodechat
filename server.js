const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();

app.use(bodyParser.json());
app.use(router);

app.get('/', function(req, res) {
    res.json({'greetings': 'Hisss'})
});

app.listen(3000);
console.log('localhost:3000')