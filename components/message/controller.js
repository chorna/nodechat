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

        resolve(fullMessage)
        console.log(fullMessage);

    });

};

module.exports = {
    addMessage,
}