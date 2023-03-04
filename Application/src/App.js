import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [ip, setIP] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <form action="../../post" method="post" 
              className="form">
          <button type="submit">Connected?</button>
        </form>

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <br></br>
          <input type={"text"} onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <br></br>
        <label>
          Password:
          <br></br>
          <input type={"password"} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <br></br>
        <label>
          IP Address:
          <br></br>
          <input type={"text"} onChange={(e) => setIP(e.target.value)}/>
        </label>
        <br></br>
        <input type="submit" value="Connect to Robot" />
      </form>
    </>
  );
}

export default App;
