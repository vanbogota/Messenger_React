import React, { useState } from 'react';
import { Link, useParams, Outlet } from "react-router-dom";
import MessagesList from '../components/messageslist';
import { initialChats } from './initials';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Dialog, DialogTitle, TextField } from '@material-ui/core';
import { addChat } from '../store/chats/actions';

const ChatList = ({ chatId }) => {
    const [visible, setVisible] = useState(false);
    const [newChatName, setNewChatName] = useState("");

    const chats = useSelector((state) => state.chats.chatList);
    const dispatch = useDispatch();

    const handleClose = () => setVisible(false);
    const handleOpen = () => setVisible(true);
    const handleChange = (e) => setNewChatName(e.target.value);
    const onAddChat = () => {
        dispatch(addChat(newChatName));
        setNewChatName("");
        handleClose();
    };

    return (
        <>
            <div>
                <header>Choose chat</header>
                {Object.keys(chats).map((id, i) => (
                    <div key={i}>
                        <Link to={`/chats/${id}`}>
                            <b style={{ color: id === chatId ? "#000000" : "grey" }}>
                                {chats[id].name}
                            </b>
                        </Link>
                    </div>
                ))}
                <Outlet />
                <span className='add-chat' onClick={handleOpen}>
                    Add Chat
                </span>
            </div>
            <Dialog open={visible} onClose={handleClose}>
                <DialogTitle>Enter name for new chat</DialogTitle>
                <TextField value={newChatName} onChange={handleChange} />
                <Button onClick={onAddChat} disabled={!newChatName}>
                    Submit
                </Button>
            </Dialog>
        </>
    );
};

export default function Chats() {
    const { chatId } = useParams();
    const [chats, setChats] = useState(initialChats);

    if (!chats[chatId]) {
        return (<>
            <ChatList chats={chats} chatId={'id1'} />
        </>)
    }
    return (
        <>
            <header>Chats List</header>
            <div className="wrapper">
                <div>
                    <ChatList chats={chats} chatId={chatId} />
                </div>
                <div>
                    <MessagesList messages={chats[chatId].messages} />
                </div>
            </div>
        </>
    );
};