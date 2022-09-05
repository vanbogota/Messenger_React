import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { TextField } from "@material-ui/core";

const chats = [{ id: 1, name: 'chat1' }]

function App() {

  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [state, setState] = useState([{ text: '', author: 'user' }]);

  const handleChange = (event) => {
    setState(event.target.value)
  }

  function submitHandle(event) {
    event.preventDefault();
    if (state.length > 0) {
      setState(pervstate => [...pervstate, { text, author }]);
    }
  }

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <React.Fragment>
      <TextField
        style={{ margin: '20px' }}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={state}
        onChange={handleChange}
      />
      <form onSubmit={submitHandle}>
        Your Message:
        <input ref={inputRef} type="text" onChange={handleChange} />
        <input type="submit" value="Send" />
      </form>
      {state.map((message, index) => <div key={index}>Author {message.author} his mess: {message.text}</div>)}
      {chats.map((chat) => <div key={chat.id}>{chat.name}</div>)}
    </React.Fragment>
  );
}

export default App;
