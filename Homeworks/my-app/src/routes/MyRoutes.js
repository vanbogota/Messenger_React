import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Profile from '../components/profile';
import { Home } from '../components/home';
import Chats from '../components/chats';
import { initialChats } from '../components/initials';
import { Provider } from "react-redux";
import { store } from '../store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { GistsList } from '../components/gists';

function Routing() {
    //const [chats, setChats] = useState(initialChats);


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
                    <Link to="/gists">Gists </Link>
                </nav>
            </header>
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={<CircularProgress />}>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route path='profile' element={<Profile />} />
                        <Route path='chats' render={({ match }) => <Redirect to="/chats/id1" />} >
                            <Route path=':chatId' element={<Chats />} />
                        </Route>
                        <Route path='*' element={<h3>Page not found</h3>} />
                        <Route path='/gists' element={<GistsList />} />
                        <Route path='/nocaht' element={<h3></h3>} />
                    </Routes>
                </PersistGate>
            </Provider>
        </BrowserRouter >
    )
}

export default Routing;

// chats={chats} setChats={setChats}