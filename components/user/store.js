const Model = require('./model.js');

addUser = (user) => {
    const myuser = new Model(user);
    myuser.save();
};

getUsers = async (filter) => {
    const users = await Model.find(filter);
    return users;
};

getUser = async (id) => {
    const user = await Model.findOne(id)
    return user;
};

updateUser = async (id, text) => {
    const user = await Model.findOne({ _id: id })
    if (user) {
        user.name = text;
        user.save();
        return user;
    }
};

deleteUser = async (id) => {
    const user = await Model.findOne({ _id: id });
    if (user) {
        return Model.deleteOne({ _id: id });
    }
};

module.exports = {
    add: addUser,
    list: getUsers,
    get: getUser,
    updateText: updateUser,
    delete: deleteUser,
}