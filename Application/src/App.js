import { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [ip, setIP] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('../../handshake', {
      params: {
        username: username,
        password: password,
        ip: ip
    }
    }).then(response => {
      console.log("Successful");
      setErrorMessage("");
    }).catch(response => {
      setErrorMessage(response);
      // setErrorMessage("Error with Handshake - Please check your network connection / inputs and try again");
    })
  }

  return (
    <>
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
      <p id='errorMessage' style={{color: "red"}}>{errorMessage}</p>
    </>
  );
}

export default App;
