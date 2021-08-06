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

addMessage = (message) => {
    const myMessage = new Model(message);
    myMessage.save();
};

getMessages = async (filter) => {
    const messages = await Model.find(filter);
    return messages;
};

getMessage = async (id) => {
    const message = await Model.findOne(id)
    return message;
};

updateMessage = async (id, text) => {
    const message = await Model.findOne({_id: id})
    if (message){
        message.message = text;
        message.save();
        return message;
    }
};

deleteMessage = async (id) => {
    const message = await Model.findOne({_id: id});
    if (message) {
        return Model.deleteOne({_id: id});
    }
};

module.exports = {
    add: addMessage,
    list: getMessages,
    get: getMessage,
    updateText: updateMessage,
    delete: deleteMessage,
}