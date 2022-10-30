import React, { useCallback } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { getProfileName } from "../store/profile/selectors";

function MessagesList({ messages }) {

    const profileName = useSelector(getProfileName, shallowEqual);
    const renderMessage = useCallback((messages, i) => (
        <div key={i}>
            <span>
                {messages.author === 'ME' ? profileName : messages.author}
            </span>
        </div>
    ), [profileName])

    if (!messages) {
        return (<div> no messages </div>)
    }
    return (
        messages.map((message) => <div>
            {renderMessage}
            {message.text}
        </div>)
    )
}

export default MessagesList