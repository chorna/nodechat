const store = require('./store');

addChat = (users) => {
    return new Promise((resolve, reject) => {
        if (!users || !Array.isArray(users)) {
            return reject('Datos incorrectos');
        }

        const data = {
            users: users,
        };

        store.add(data);
        resolve(data)

    });
};

listChats = (userId) => {
    return store.list(userId);
}

module.exports = {
    addChat,
    listChats
}