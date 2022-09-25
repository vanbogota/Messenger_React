import { TextField } from '@material-ui/core';
import React, { useEffect, useMemo, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getChatById, getChatList } from '../store/chats/selectors';
import { addMessage } from '../store/messages/actions';
import { getMessagesList } from '../store/messages/selectors';

function MessageField({ chatId }) {

    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');
    // const [messageList, setState] = useState([{ text: '', author: '' }]);

    const chats = useSelector(getChatList, shallowEqual);
    const messages = useSelector(getMessagesList, shallowEqual)
    const getSelectedChat = useMemo(() => getChatById(chatId), [chatId]);
    const selectedChat = useSelector(getSelectedChat);

    const dispatch = useDispatch();
    const onAddMessage = (message) => {
        dispatch(addMessage(chatId, message));
    }

    const handleChange = (event) => {
        setText(event.target.value);
        setAuthor('ME');
    }

    function handleSubmit(event) {
        event.preventDefault();
        onAddMessage(event)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField
                    style={{ margin: '20px' }}
                    id="outlined-basic"
                    label="Your Message"
                    variant="outlined"
                    value={text}
                    onChange={handleChange}
                />
                <input type="submit" value="Send" />
            </form>
        </>
    )
}

export default MessageField