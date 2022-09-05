import logo from './logo.svg';
import './App.css';
import { Message } from './Message'

const text = 'Homework of lesson 1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {Message(text)}
        </div>
      </header>
    </div>
  );
}

export default App;
