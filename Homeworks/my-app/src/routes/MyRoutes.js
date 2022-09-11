import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link, useParams, Outlet } from "react-router-dom";

const initialChats = {
    id1: {
        name: "Chat1",
        messages: [{ text: "FirstMessage in Chat1", author: 'BOT' }],
    },
    id2: {
        name: "Chat2",
        messages: [{ text: "FirstMessage in Chat2", author: 'ME' }],
    },
    id3: {
        name: "Chat3",
        messages: [{ text: "FirstMessage in Chat3", author: 'ME' }],
    },
};

const MessagesList = ({ messages }) => {

    return messages.map((message) =>
        <div>
            <h4>{message.author}</h4>
            <p>{message.text}</p>
        </div>);
}


function Routing() {
    const [chats, setChats] = useState(initialChats);

    return (
        <BrowserRouter>
            <header>
                <nav style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}>
                    <Link to="/profile">Profile </Link>
                    <Link to="/chats">Chats </Link>
                    <Link to="/">Home </Link>
                </nav>
            </header>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='profile' element={<Profile />} />
                <Route path='chats' element={<Chats chats={chats} setChats={setChats} />}>
                    <Route path=':chatId' element={<Chats chats={chats} setChats={setChats} />} />
                </Route>
                <Route path='*' element={<h3>Page not found</h3>} />
            </Routes>
        </BrowserRouter >
    )
}

export default Routing;

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

const Chats = () => {
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

const Profile = () => <div>Here wil be your profile</div>;

const Home = () => <div>Home Page</div>;