import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { showName, changeName, removeUser } from "../slices/slices";
import { Navigate } from "react-router-dom";

export default function Profile() {
    const isAuth = useAuth();
    const { showN, name } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const setShowName = useCallback(() => {
        dispatch(showName(showN));
    }, [dispatch, showN]);

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const setName = useCallback(() => {
        dispatch(changeName(value))
    }, [dispatch, value]);

    return isAuth.isAuth ? (
        <>
            <h4>Profile</h4>
            <div>
                <h2>Привет,{isAuth.email}</h2>
            </div>
            <button onClick={() => { dispatch(removeUser()) }}>Выйти из аккаунта</button>

            <div>
                <input
                    type="checkbox"
                    checked={showN}
                    value={showN}
                    onChange={setShowName}
                />
                <span>Show Name</span>
                {showN && <div>{name}</div>}
            </div>
            <div>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button onClick={setName}>Change Name</button>
            </div>
        </>
    ) : (<Navigate to={'/login'} />)
}