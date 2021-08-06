const store = require('./store');

addUser = (name) => {
    return new Promise((resolve, reject) => {
        if (!name) {
            return reject('Datos incorrectos');
        }

        const fulluser = {
            name: name
        };

        store.add(fulluser);
        resolve(fulluser)

    });
};

getUsers = (filter) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(filter))
    });
}

getUser = (id) => {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Error');
        }
        resolve(store.get());
    });
}

updateUser = (id, name) => {
    return new Promise(async (resolve, reject) => {
        if (!name) {
            reject('Error')
        }
        user = await store.updateText(id, name)
        resolve(user)
    });
}

deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('Error')
        }
        store.delete(id)
            .then(() => resolve())
            .catch(e => reject(e))

    });
}

module.exports = {
    addUser,
    getUsers,
    updateUser,
    getUser,
    deleteUser
}