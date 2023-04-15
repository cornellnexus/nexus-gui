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

  // Posts form data to backend, which will try to initialize handshake
  // If successful, navigates to mission page
  // If not, outputs error
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
    <div className='App'>
      <div className='header'>
        <div className='logo'>
          <img style={{"width": '150px', 'marginLeft': '50px', 'marginTop': '10px'}} src={require('./Images/logo.png')} />
        </div>
      </div>

      <div className='form-container'>
        <div className='form'>
          <h2>Setup</h2> 
          <form onSubmit={handleSubmit}>
            <div className='input-box'>
              <input type={"text"} placeholder={"Username"} onChange={(e) => setUsername(e.target.value)} required />
            </div>

            <div className='input-box'>
              <input type={"password"} placeholder={"Password"} onChange={(e) => setPassword(e.target.value)} required />
            </div>

            <div className='input-box'>
              <input type={"text"} placeholder={"IP Address"} onChange={(e) => setIP(e.target.value)} required />
            </div>

            <div className='input-box button'>
              <input type={"submit"} value="Connect to Robot" />
            </div>

            <p id='errorMessage' style={{color: "red"}}>{errorMessage}</p>
        </form>
      </div>
      </div>
      
    </div>
    </>
  );
}

export default App;
