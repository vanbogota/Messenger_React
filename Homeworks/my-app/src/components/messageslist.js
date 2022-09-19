import React, { useCallback } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { getProfileName } from "../store/profile/selectors";


function MessagesList({ messages }) {

    const profileName = useSelector(getProfileName, shallowEqual);
    const renderMessage = useCallback((message, i) => (
        <div key={i}>
            <span>
                {message.author === 'ME' ? profileName : message.author}
            </span>
        </div>
    ), [profileName])
    if (!messages) {
        return (<div> no messages </div>)
    }
    return messages.map((message) =>
        <div>
            {renderMessage}
            {message.text}
        </div>
    )
}

export default MessagesList