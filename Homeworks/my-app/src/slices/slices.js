import { createSlice } from "@reduxjs/toolkit";
import { initialChats } from "../components/initials";

const initialState1 = {
    chatList: initialChats,
};

const chatSlice = createSlice({
    name: 'chats',
    initialState: initialState1,
    reducers: {
        addChat: (state, action) => {
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id: `${state.chatList.length}`,
                        name: action.name,
                    },
                ],
            }
        }
    }
})

export const { addChat } = chatSlice.actions;
export const chatReducer = chatSlice.reducer;

const initialState2 = {
    messageList: initialChats,
};

const messageSlice = createSlice({
    name: 'messages',
    initialState: initialState2,
    reducers: {
        addMessage: (state, action) => {
            const currentList = state.messageList[action.chatId] || [];
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: [
                        ...currentList,
                        {
                            ...action.message,
                            id: `${action.chatId}${currentList.length}`,
                        },
                    ],
                },
            };
        }
    }

});

export const { addMessage } = messageSlice.actions;
export const messagesReducer = messageSlice.reducer;

const profileInitialState = {
    showName: false,
    name: 'Default'
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: profileInitialState,
    reducers: {
        showName: (state) => {
            return {
                ...state,
                showName: !state.showName
            }
        },
        changeName: (state, action) => {
            return {
                ...state,
                name: action.payload
            }
        }
    }
});

export const { showName, changeName } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
