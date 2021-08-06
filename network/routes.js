const message = require('../components/message/network.js');
const user = require('../components/user/network.js');

const routes = (server) => {
    server.use('/message', message);
    server.use('/user', user);
}

module.exports = routes;