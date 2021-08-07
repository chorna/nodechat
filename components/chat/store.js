const Model = require('./model.js');

addChat = (chat) => {
    const mychat = new Model(chat);
    return mychat.save();
};

listChats = async (userId) => {
    let filter = {};
    if (userId){
        filter = {users: userId}
    }


    const chats = await Model.find(filter)
        .populate('users')
        .exec();
    return chats
}

module.exports = {
    add: addChat,
    list: listChats
}