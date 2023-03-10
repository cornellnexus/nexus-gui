import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function App() {
  let navigate = useNavigate();

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
      navigate("/mission", {state: {ip: ip}});
    }).catch(response => {
      setErrorMessage(response.response.data.error);
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
