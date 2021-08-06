const db = require('mongoose');
const Model = require('./model.js');
const config = require('../../config.js');

db.Promise = global.Promise;

const user = encodeURIComponent(config.dbUser);
const password = encodeURIComponent(config.dbPassword);
const host = encodeURIComponent(config.dbHost);
const dataBase = encodeURIComponent(config.dbName);


db.connect(`mongodb+srv://${user}:${password}@${host}/${dataBase}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
console.log('[db], conectada');

let list = [];

addMessage = (message) => {
    const myMessage = new Model(message);
    myMessage.save();
};

getMessages = () => list;

module.exports = {
    add: addMessage,
    list: getMessages,
}