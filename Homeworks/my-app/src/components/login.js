import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { createUserThunk, loginThunk } from "../slices/slices"
import { Navigate } from "react-router-dom";

export const Login = () => {
    const isAuth = useAuth().isAuth;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    return !isAuth ? (
        <div style={authStyles().container}>
            <h1>Логин</h1>

            <div style={authStyles().card}>
                <input
                    type='text'
                    placeholder='email'
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }} />

                <input
                    type='password'
                    placeholder='password'
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }} />

                <div>
                    <button onClick={() => {
                        dispatch(createUserThunk({ email, password }))
                    }
                    }>Регистрация</button>

                    <button onClick={() => {
                        dispatch(loginThunk({ email, password }))
                    }
                    }>Войти</button>
                </div>
            </div>
        </div>
    ) :
        (<Navigate to={'/profile'} />)
};

const authStyles = () => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f5f5f5',
        height: '100vh'
    },
    card: {
        padding: '30px',
        borderRadius: '30px',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100px'
    }
})