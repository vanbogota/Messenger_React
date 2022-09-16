import React from "react";

export default function MessagesList({ messages }) {

    return messages.map((message) =>
        <div>
            <h4>{message.author}</h4>
            <p>{message.text}</p>
        </div>);
}