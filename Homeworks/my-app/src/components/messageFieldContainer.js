import { TextField } from '@material-ui/core';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getChatById, getChatList } from '../store/chats/selectors';
import { addMessage, addMessageWithThunk } from '../store/messages/actions';
import { getMessagesList } from '../store/messages/selectors';
import { MessageField } from './messageField';

export const MessageFieldContainer = () => {
    const { chatId } = useParams();
    const chats = useSelector(getChatList);
    const messageList = useSelector(getMessagesList);
    const dispatch = useDispatch();
    const onAddMessage = useCallback(
        (message) => {
            dispatch(addMessageWithThunk(chatId, message));
        },
        [chatId]
    );
    const onAddChat = useCallback((newChatName) => {
        dispatch(addChat(newChatName));
    }, []);
    if (!chatId) {
        return (
            <>
                <ChatList chats={chats} chatId={null} onAddChat={() => { }} />
            </>
        );
    }
    if (!chats[chatId]) {
        return <Redirect to="/nochat" />;
    }
    return (
        <MessageField
            chatId={chatId}
            messages={messageList[chatId]}
            onAddChat={onAddChat}
            onAddMessage={onAddMessage}
        />
    );

}