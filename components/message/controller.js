const store = require('./store');

addMessage = (chat, user, message) => {
    return new Promise((resolve, reject) => {
        console.log(chat, user, message)
        if (!chat || !user || !message){
            return reject('Datos incorrectos');
        }

        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date()
        };

        store.add(fullMessage);
        resolve(fullMessage);

    });
};

getMessages = (filter) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(filter));
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
            reject('Error');
        }
        message = await store.updateText(id, data);
        resolve(message);
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