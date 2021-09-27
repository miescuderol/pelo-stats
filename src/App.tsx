import React, { useEffect, useState } from 'react';
import { ReactComponent as Logo } from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import userInfo from './config/.user-config.json';


function App() {
    const [userId, setUserId] = useState('');
    const [sessionId, setSessionId] = useState('');

    useEffect(() => {
        fetch("http://localhost:3001/auth", {method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(userInfo)})      
        .then((res) => res.json())
        .then(
            (result) => {
                console.log(result)
                // setUserId(result.user_id);
                // setSessionId(result.session_id);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log(error);
            }
        )
    });


  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
