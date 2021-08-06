const store = require('./store');

addMessage = (user, message) => {
    return new Promise((resolve, reject) => {
        if (!user || !message){
            return reject('Datos incorrectos');
        }

        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        };

        store.add(fullMessage);
        resolve(fullMessage)
        console.log(fullMessage);

    });
};

getMessages = (filter) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(filter))
    });
}

getMessage = (id) => {
    return new Promise((resolve, reject) => {
        if (!id){
            reject('Error');
        }
        resolve(store.get());
    });
}

updateMessage = (id, data) => {
    return new Promise(async (resolve, reject) => {
        if (!data || !id){
            reject('Error')
        }
        message = await store.updateText(id, data)
        resolve(message)
    });
}

deleteMessage = (id) => {
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
    addMessage,
    getMessages,
    updateMessage,
    getMessage,
    deleteMessage
}