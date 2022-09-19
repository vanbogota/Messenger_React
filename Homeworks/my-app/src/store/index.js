import { configureStore } from '@reduxjs/toolkit';
import { chatReducer, messagesReducer, profileReducer } from '../slices/slices';

export const store = configureStore({
    reducer: {
        chats: chatReducer,
        profile: profileReducer,
        messages: messagesReducer,
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
