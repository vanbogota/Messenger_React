import { messagesReducer, addMessage } from "./slices";

test('should return the initial state', () => {

    expect(messagesReducer(undefined, { type: undefined })).toEqual([
        { id: '1', name: "Chat1", messages: [{ text: "FirstMessage in Chat1", author: 'BOT' }] }
    ])
})

test('should handle a message being added to an empty list', () => {
    const previousState = []

    expect(reducer(previousState, addMessage('Run the tests'))).toEqual([
        { id: null, name: null, messages: [{ text: "Run the tests", author: 'BOT' }] }
    ])
})

