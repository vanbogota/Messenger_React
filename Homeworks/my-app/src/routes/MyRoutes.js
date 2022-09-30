import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Link, redirect, Navigate } from "react-router-dom";
import Profile from '../components/profile';
import { Home } from '../components/home';
import Chats from '../components/chats';
import { Provider } from "react-redux";
import { persistor, store } from '../store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { GistsList } from '../components/gists';
import { CircularProgress } from '@material-ui/core';
import { SignUp } from '../components/signup';
import { Login } from '../components/login';
import PublicRoute from '../hocs/PublicRote';
import PrivateRoute from '../hocs/PrivateRoute';
import firebase from "firebase";

function Routing() {
    const [authed, setAuthed] = useState(false);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setAuthed(true);
            } else {
                setAuthed(false);
            }
        })
    }, []);

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
                    <Link to="/signup">Registration</Link>
                    <Link to="/login">Login</Link>
                </nav>
            </header>
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={<CircularProgress />}>
                    <Routes>
                        <PublicRoute authenticated={authed} exact path='/' element={<Home />} />
                        <PrivateRoute authenticated={authed} path='profile' element={<Profile />} />
                        <PrivateRoute authenticated={authed} path='chats' element={<Navigate replace to="/chats/id1" />} >
                            < PrivateRoute authenticated={authed} path=':chatId' element={< Chats />} />
                        </PrivateRoute>
                        <Route path='*' element={<h3>Page not found</h3>} />
                        <PublicRoute authenticated={authed} path='/gists' element={<GistsList />} />
                        <PrivateRoute authenticated={authed} path='/nochat' element={<h3>нет чатов</h3>} />
                        <PublicRoute authenticated={authed} path='/signup' element={<SignUp />} />
                        <PublicRoute authenticated={authed} path='/login' element={<Login />} />
                    </Routes>
                </PersistGate>
            </Provider>
        </BrowserRouter >
    )
}

export default Routing;

