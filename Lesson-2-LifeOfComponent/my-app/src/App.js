import React, { useEffect, useState } from 'react';
import './App.css';
import { TextField } from "@material-ui/core";

function App() {

  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [state, setState] = useState([{ text: '', author: 'user' }]);

  const changeHandle = (event) => {
    setState(event.target.value)
  }

  function submitHandle(event) {
    event.preventDefault();
    if (state.length > 0) {
      setState(pervstate => [...pervstate, { text, author }]);
    }
  }

  return (
    <React.Fragment>
      <form onSubmit={submitHandle}>
        Your Message:
        <input type="text" onChange={changeHandle} />
        <input type="submit" value="Send" />
      </form>
      {state.map((message) => <div>Author {message.author} his mess: {message.text}</div>)}
    </React.Fragment>
  );
}

export default App;
