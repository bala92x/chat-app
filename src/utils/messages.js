const generateMessage = (text, username = 'chatbot') => {
    return {
        text,
        username,
        createdAt: new Date().getTime()
    };
};

const generateLocationMessage = (url, username = 'chatbot') => {
    return {
        url,
        username,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}