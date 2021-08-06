const Model = require('./model.js');

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