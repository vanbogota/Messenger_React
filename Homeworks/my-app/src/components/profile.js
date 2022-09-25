import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showName, changeName } from "../slices/slices";

export default function Profile() {
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

    return (
        <>
            <div>
                <h4>Profile</h4>
            </div>
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

    );
}