const express = require('express');
const response = require('../../network/response.js');
const controller = require('./controller.js');
const router = express.Router();

router.get('/', function (req, res) {
    const filter = req.query || null
    controller.getUsers(filter)
        .then((users) => response.success(req, res, users, 200))
        .catch(err => response.error(req, res, 'Unexpected error'))
});

router.get('/:id', function (req, res) {

    controller.getUser(req.params.id)
        .then((user) => response.success(req, res, user, 200))
        .catch(err => response.error(req, res, 'Unexpected error', 404, err))
});

router.post('/', function (req, res) {

    controller.addUser(req.body.name)
        .then((user) => response.success(req, res, user, 201))
        .catch(err => response.error(req, res, 'Invalid data', 400))

});

router.patch('/:id', function (req, res) {

    controller.updateUser(req.params.id, req.body.name)
        .then((data) => response.success(req, res, data, 200))
        .catch(err => response.error(req, res, 'Invalid data', 500, err))

});

router.delete('/:id', function (req, res) {

    controller.deleteUser(req.params.id)
        .then(() => response.success(req, res, `user ${req.params.id} deleted`, 200))
        .catch(err => response.error(req, res, 'Invalid data', 500, err))

});


module.exports = router;