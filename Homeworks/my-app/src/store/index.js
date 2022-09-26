import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, configureStore } from '@reduxjs/toolkit';
import { addMessage, chatReducer, messagesReducer, profileReducer } from '../slices/slices';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    chats: chatReducer,
    profile: profileReducer,
    messages: messagesReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export const persistor = persistStore(store);
