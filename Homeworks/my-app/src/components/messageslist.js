import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function MessagesList() {
    const profileName = useSelector(state => state.profile.name);

    const renderMessage = useCallback((message, i) => (
        <div key={i}>
            <span>
                {message.author === "ME" ? profileName : message.author}:
            </span>
            <span>{message.text}</span>
        </div>
    ), [profileName]);

    return renderMessage;
}