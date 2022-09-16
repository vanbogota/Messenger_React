import React, { useEffect, useState, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getChatList } from '../store/chats/selectors';
import { addMessage } from '../store/messages/actions';
import { getMessagesList } from '../store/messages/selectors';

function MessageField() {

    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');
    // const [messageList, setState] = useState([{ text: '', author: '' }]);

    const chats = useSelector(getChatList, shallowEqual);
    const messages = useSelector(getMessagesList, shallowEqual)
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