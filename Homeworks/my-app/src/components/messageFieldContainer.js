import { TextField } from '@material-ui/core';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getChatById, getChatList } from '../store/chats/selectors';
import { addMessage, addMessageWithThunk } from '../store/messages/actions';
import { getMessagesList } from '../store/messages/selectors';
import { MessageField } from './messageField';
import firebase from 'firebase';

export default function MessageFieldContainer() {
    const { chatId } = useParams();
    const [messages, setMessages] = useState([]);
    const onAddMessage = useCallback(
        (message) => {
            firebase.database()
                .ref("messages")
                .child(chatId)
                .child(message.id)
                .set(message);
        },
        [chatId]
    );
    useEffect(() => {
        firebase.database().ref("messages").child(chatId).on("value", (snapshot) => {
            const newMessages = [];
            snapshot.forEach(entry => {
                messages.push(entry.val());
            });
            setMessages(newMessages);
        });
    }, []);
    if (!chatId) {
        return (
            <>
                <ChatList chats={chats} chatId={null} onAddChat={() => { }} />
            </>
        );
    }
    if (!chats[chatId]) {
        return <div>No chat</div>;
    }
    return (
        <>
            <header>Header</header>
            <div className="wrapper">
                <div>
                    <ChatList chatId={chatId} />
                </div>
                <div>
                    <MessagesList messages={messages} />
                    <Input onAddMessage={onAddMessage} />
                </div>
            </div>
        </>
    );
}
