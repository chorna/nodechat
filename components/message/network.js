const express = require('express');
const response = require('../../network/response.js');
const controller = require('./controller.js');
const router = express.Router();

router.get('/', function (req, res) {
    response.success(req, res, 'ok');
});

router.post('/', function (req, res) {

    controller.addMessage(req.body.user, req.body.message)
    .then((message) => response.success(req, res, message))
    .catch(err => response.error(req, res, 'Información incompleta', 400))

});

module.exports = router;