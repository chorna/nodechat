const express = require('express');
const response = require('../../network/response.js');
const controller = require('./controller.js');
const router = express.Router();

router.post('/', function (req, res) {

    controller.addChat(req.body.users)
        .then((chat) => response.success(req, res, chat, 201))
        .catch(err => response.error(req, res, 'Invalid data', 400))

});

router.get('/:userId', function (req, res) {

    controller.listChats(req.params.userId)
        .then((chat) => response.success(req, res, chat, 200))
        .catch(err => response.error(req, res, 'Invalid data', 400))

});


module.exports = router;