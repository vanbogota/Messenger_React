import { configureStore } from '@reduxjs/toolkit';
import chatsReducer from './chats/reducer';
import profileReducer from './profile/reducer';
import messagesReducer from './messages/reducer';

export const store = configureStore({
    reducer: {
        chats: chatsReducer,
        profile: profileReducer,
        messages: messagesReducer,
    }
});
