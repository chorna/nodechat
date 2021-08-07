const store = require('./store');
const socket = require('../../socket').socket;

addMessage = (chat, user, message, file) => {
    return new Promise((resolve, reject) => {
        if (!chat || !user || !message){
            return reject('Datos incorrectos');
        }

        let fileUrl = file ? `http://localhost:3000/app/files/${file.filename}` : '';

        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
            file: fileUrl
        };

        store.add(fullMessage);

        socket.io.emit('message', fullMessage);
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