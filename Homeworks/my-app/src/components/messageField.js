import { Input, TextField } from '@material-ui/core';
import React from 'react';
import MessagesList from './messageslist';

export const MessageField = ({ chatId, messages, onAddMessage, onAddChat }) => (
    <section className="message-field">
        <header className="message-header">Header</header>
        <div className="wrapper">
            <div>
                <ChatList chatId={chatId} onAddChat={onAddChat} />
            </div>
            <div>
                <MessagesList messages={messages} />
                <Input onAddMessage={onAddMessage} />
            </div>
        </div>
    </section>
);
