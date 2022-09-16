import React, { useCallback } from "react";
import { useSelector } from "react-redux";


function MessagesList({ message }) {
    const profileName = useSelector(state => state.profile.name)
    const renderMessage = useCallback((message, i) => (
        <div key={i}>
            <span>
                {message.author === 'ME' ? profileName : message.author}
            </span>
        </div>
    ), [profileName])

    return renderMessage;
}

export default MessagesList