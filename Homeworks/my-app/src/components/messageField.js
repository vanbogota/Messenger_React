import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../store/messages/actions';

function MessageField() {

    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');
    // const [messageList, setState] = useState([{ text: '', author: '' }]);

    const chats = useSelector(state => state.chats.chatList);
    const messages = useSelector(state => state.messages.messageList)
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

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);


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
                <input ref={inputRef} type="submit" value="Send" />
            </form>
        </>
    )
}

export default MessageField