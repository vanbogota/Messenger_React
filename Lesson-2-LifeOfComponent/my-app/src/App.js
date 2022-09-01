import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [state, setState] = useState([]);

  const messagesList = [
    {
      author: 'test',
      text: 'test'
    }
  ]

  useEffect(() => {
    setState(messagesList)
  }, [])

  const submitHandle = (event) => {
    event.target.value
    event.preventDefault();
  }

  return (
    <>
      <div>
        {messagesList.map((message) => <><h1>{message.author}</h1> <p>{message.text}</p></>)}
      </div>
      <form onSubmit={submitHandle}>
        <label>
          Your Message:
          <input type="text" value={state} onChange={value => setState(value)} />
        </label>
        <input type="submit" value="Send" />
      </form>
    </>
  );
}

export default App;
