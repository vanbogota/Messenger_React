import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialChats } from "../components/initials";
import { auth } from '../services/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { async } from '@firebase/util';

const chatSlice = createSlice({
    name: 'chats',
    initialState: {
        initialChats
    },
    reducers: {
        addChat: (state, action) => {
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id: `id${state.chatList.length}`,
                        name: action.name,
                    },
                ],
            }
        }
    }
})

export const { addChat } = chatSlice.actions;
export const chatReducer = chatSlice.reducer;

const messageSlice = createSlice({
    name: 'messages',
    initialState: {
        initialChats
    },
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

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        showName: false,
        name: 'Default'
    },
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

export const createUserThunk = createAsyncThunk(
    'user/addUserThunk',
    async ({ email, pass }) => {
        try {
            const userCredit = await createUserWithEmailAndPassword(auth, email, pass);
            console.log(userCredit.user)

            const userData = {
                email: userCredit.user.email,
                id: userCredit.user.uid,
                token: userCredit.user.accessToken
            }
            return userData
        } catch (e) {
            console.log(e.code, e.message)
        }
    }
)

export const loginThunk = createAsyncThunk(
    'user/loginThunk',
    async ({ email, pass }) => {
        try {
            const userCredit = await signInWithEmailAndPassword(auth, email, pass);
            const userData = {
                email: userCredit.user.email,
                id: userCredit.user.uid,
                token: userCredit.user.accessToken
            }
            return userData;
        } catch (e) {
            console.log(e.code, e.message)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
        token: null,
        id: null
    },
    reducers: {
        addUser: (state, action) => {
            return state = action.payload
        },
        removeUser: (state) => {
            state.email = null
            state.token = null
            state.id = null
        }
    },
    extraReducers: {
        [createUserThunk.fulfilled]: (state, action) => {
            return state = action.payload
        },
        [loginThunk.fulfilled]: (state, action) => {
            return state = action.payload
        }
    }
})

export const { addUser, removeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;