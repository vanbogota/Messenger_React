import React, { useCallback, useState } from "react";
import { showNameAction, changeName } from "../store/profile/actions";
import { useSelector, useDispatch } from "react-redux";

export default function Profile() {
    const { showName, name } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const setShowName = useCallback(() => {
        dispatch(showNameAction);
    }, [dispatch]);

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const setName = useCallback(() => {
        dispatch(changeName(value))
    }, [dispatch, value]);

    return (
        <>
            <div>
                <h4>Profile</h4>
            </div>
            <div>
                <input
                    type="checkbox"
                    checked={showName}
                    value={showName}
                    onChange={setShowName}
                />
                <span>Show Name</span>
                {showName && <div>{name}</div>}
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

    );
}