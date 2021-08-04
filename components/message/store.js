let list = [];

addMessage = (message) => list.push(message);
getMessages = () => list;

module.exports = {
    add: addMessage,
    list: getMessages,
}