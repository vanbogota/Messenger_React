import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { TextField } from "@material-ui/core";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Routing from "./routes/MyRoutes";

const chats = [{ id: 1, name: 'chat1' }, { id: 2, name: 'chat2' }, { id: 3, name: 'chat3' }]

function App() {

  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [messageList, setState] = useState([{ text: '', author: '' }]);

  const handleChange = (event) => {
    setText(event.target.value);
    setAuthor('Me');
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (messageList.length > 0) {
      setState(pervstate => [...pervstate, { text, author }]);
    }
  }

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);


  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          style={{ margin: '20px' }}
          id="outlined-basic"
          label="Your Message"
          variant="outlined"
          value={text}
          onChange={handleChange}
        />
        <input ref={inputRef} type="submit" value="Send" />
      </form>
      <table>
        <tr>
          <td valign='top' align='left'>{chats.map((chat) => <div key={chat.id}><h2>{chat.name}:</h2></div>)}</td>
          <td valign='top' align='right'>{messageList.map((message, index) => <div key={index}><h3>{message.author}</h3> <p>{message.text}</p></div>)}</td>
        </tr>
      </table>
    </>
  );
}

export default App;
