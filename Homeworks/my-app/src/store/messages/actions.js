export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    chatId,
    message,
});

export const addMessageWithThunk = (chatId, message) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message));
    if (message.author !== "BOT") {
        const botMessage = { author: "BOT", text: "Text from BOT" };
        setTimeout(() => dispatch(addMessage(chatId, botMessage)), 2000);
    }
}