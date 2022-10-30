
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { createUserThunk, loginThunk } from "../slices/slices"

export const SignUp = () => {
    const isAuth = useAuth().isAuth;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleSubmit = () => {
        dispatch(createUserThunk({ email, password }))
    };
    return !isAuth ? (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Fill in the form below to register new account.</p>
                <div>
                    <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        onChange={handleEmailChange}
                        value={email}
                    />
                </div>
                <div>
                    <input
                        placeholder="Password"
                        name="password"
                        onChange={handlePassChange}
                        value={password}
                        type="password"
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
                <hr />
                <p>
                    Already have an account? <Link to="/login">Sign in</Link>
                </p>
            </form>
        </div>
    ) : (<Navigate to={'/profile'} />)
}