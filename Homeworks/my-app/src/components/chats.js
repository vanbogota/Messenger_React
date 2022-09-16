import React, { useState } from 'react';
import { Link, useParams, Outlet } from "react-router-dom";
import MessagesList from '../components/messageslist';
import { initialChats } from './initials';

const ChatList = ({ chats, chatId }) => (

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
    </div>
);

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