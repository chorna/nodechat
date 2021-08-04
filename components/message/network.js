const express = require('express');
const response = require('../../network/response.js');
const controller = require('./controller.js');
const router = express.Router();

router.get('/', function (req, res) {
    controller.getMessages()
    .then((messages) => response.success(req, res, messages, 200))
        .catch(err => response.error(req, res, 'Unexpected error'))
});

router.post('/', function (req, res) {

    controller.addMessage(req.body.user, req.body.message)
    .then((message) => response.success(req, res, message))
    .catch(err => response.error(req, res, 'Invalid data', 400))

});

module.exports = router;