import React, { useState, useParams } from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const initialChats = {
    id1: {
        name: "Chat1",
        messages: [{ text: "FirstMessage", author: 'BOT' }],
    },
    id2: {
        name: "Chat2",
        messages: [{ text: "FirstMessage", author: 'ME' }],
    },
    id3: {
        name: "Chat3",
        messages: [{ text: "FirstMessage", author: 'ME' }],
    },
}

const MessagesList = ({ messages }) => {

    return messages.map((message, index) => <div key={index}><h4>{message.author}</h4><p>{message.text}</p></div>);
}


function Routing() {
    const [chats, setChats] = useState(initialChats);

    return (
        <BrowserRouter>
            <header>
                <ul>
                    <li>
                        <Link to="/profile">Propfile</Link>
                    </li>
                    <li>
                        <Link to="/chats">Chats</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </header>
            <Routes>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/profile'>
                    <Profile />
                </Route>
                <Route exact path='/chats/:chatId?'>
                    <Chats chats={chats} setChats={setChats} />
                </Route>
                <Route>
                    <h3>Page not found</h3>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;

const ChatList = ({ chats, chatId }) => (
    <div>
        {Object.keys(chats).map((id, i) => (
            <div key={i}>
                <Link to={`/chats/${id}`}>
                    <b style={{ color: id === chatId ? "#000000" : "grey" }}>
                        {chats[id].name}
                    </b>
                </Link>
            </div>
        ))}
    </div>
);

const Chats = () => {
    const { chatId } = useParams();
    const [chats, setChats] = useState(initialChats);
    if (!chats[chatId]) {
        return null
    }
    return (
        <>
            <header>Header</header>
            <div className="wrapper">
                <div>
                    <ChatList
                        chats={chats}
                        chatId={chatId}
                    />
                </div>
                <div>
                    <MessagesList messages={chats[chatId].messages} />
                </div>
            </div>
        </>
    );
};

const Profile = () => <div></div>;

const Home = () => <div></div>;