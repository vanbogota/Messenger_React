import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Profile from '../components/profile';
import { Home } from '../components/home';
import Chats from '../components/chats';
import { initialChats } from '../components/initials';
import { Provider } from "react-redux";
import { store } from '../store';

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
            <Provider store={store}>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path='chats' element={<Chats chats={chats} setChats={setChats} />}>
                        <Route path=':chatId' element={<Chats chats={chats} setChats={setChats} />} />
                    </Route>
                    <Route path='*' element={<h3>Page not found</h3>} />
                </Routes>
            </Provider>
        </BrowserRouter >
    )
}

export default Routing;