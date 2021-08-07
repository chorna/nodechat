const express = require('express');
const response = require('../../network/response.js');
const controller = require('./controller.js');
const router = express.Router();

router.get('/', function (req, res) {
    const filter = req.query || null
    controller.getMessages(filter)
        .then((messages) => response.success(req, res, messages, 200))
        .catch(err => response.error(req, res, 'Unexpected error'))
});

router.get('/:id', function (req, res) {

    controller.getMessage(req.params.id)
        .then((message) => response.success(req, res, message, 200))
        .catch(err => response.error(req, res, 'Unexpected error', 404, err))
});

router.post('/', function (req, res) {
    console.log(req.body);
    controller.addMessage(req.body.chat, req.body.user, req.body.message)
        .then((message) => response.success(req, res, message, 201))
        .catch(err => response.error(req, res, 'Invalid data', 400))

});

router.patch('/:id', function (req, res) {

    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => response.success(req, res, data, 200))
        .catch(err => response.error(req, res, 'Invalid data', 500, err))

});

router.delete('/:id', function (req, res) {

    controller.deleteMessage(req.params.id)
        .then(() => response.success(req, res, `message ${req.params.id} deleted`, 200))
        .catch(err => response.error(req, res, 'Invalid data', 500, err))

});


module.exports = router;