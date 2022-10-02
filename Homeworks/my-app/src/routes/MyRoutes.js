import React, { useEffect, useState } from 'react';
import { Route, Routes, Link, Navigate } from "react-router-dom";
import Profile from '../components/profile';
import { Home } from '../components/home';
import Chats from '../components/chats';
import { persistor } from '../store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { GistsList } from '../components/gists';
import { CircularProgress } from '@material-ui/core';
import { SignUp } from '../components/signup';
import { Login } from '../components/login';
import PublicRoute from '../hocs/PublicRote';
import PrivateRoute from '../hocs/PrivateRoute';
import { useAuth } from "../hooks/useAuth";

function Routing() {
    const authed = useAuth().isAuth;

    return (
        <PersistGate persistor={persistor} loading={<CircularProgress />}>
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
            <Routes>
                <Route authenticated={authed} exact path='/' element={<Home />} />
                <Route authenticated={authed} path='profile' element={<Profile />} />
                <Route authenticated={authed} path='chats' element={<Navigate to="/chats/id1" />} >
                    < Route authenticated={authed} path=':chatId' element={< Chats />} />
                </Route>
                <Route path='*' element={<h3>Page not found</h3>} />
                <Route authenticated={authed} path='/gists' element={<GistsList />} />
                <Route authenticated={authed} path='/nochat' element={<h3>нет чатов</h3>} />
                <Route authenticated={authed} path='/signup' element={<SignUp />} />
                <Route authenticated={authed} path='/login' element={<Login />} />
            </Routes>
        </PersistGate>
    )
}

export default Routing;

