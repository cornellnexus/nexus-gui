import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import App from './App';
import Mission from './pages/mission/mission'
import Overview from './pages/overview/overview'
import Shell from './pages/shell/shell'
import Settings from './pages/settings/settings'

<BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/' element={<App />} />
          <Route path='/mission' element={<Mission />} />
          <Route path='/overview' element={<Overview />} />
          <Route path='/shell' element={<Shell />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>

function App() {
  let navigate = useNavigate();

  // TODO: Delete default values for username and password when done testing and change page to 0
  const [username, setUsername] = useState("nexus");
  const [password, setPassword] = useState("raspberry");
  const [ip, setIP] = useState();

  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [travType, setTravType] = useState("lawnmower");
  const [baseLat, setBaseLat] = useState();
  const [baseLong, setBaseLong] = useState();
  const [gridLong, setGridLong] = useState();
  const [gridLat, setGridLat] = useState();


  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  // Posts setup data to backend, which will try to initialize handshake
  // If successful, changes form page to mission
  // If not, outputs error
  const handleSetup = async (e) => {
    e.preventDefault();
    setErrorMessage();

    const isValidIp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
    if (!isValidIp.test(ip)) {
      setErrorMessage("Please enter a valid IP address")
      return;
    }

    setLoading(true)
    await axios.post('../../handshake', {
      params: {
        username: username,
        password: password,
        ip: ip
      }
    }).then(response => {
      setLoading(false);
      setPage(1)
    }).catch(response => {
      setErrorMessage(response.response.data.error);
      setLoading(false);
    })
  }

  // Posts mission data to backend, which will try to intialize robot with those parameters
  // If successful, navigates to overview page
  // If not, outputs error
  const handleMission = async (e) => {
    e.preventDefault();
    setErrorMessage();
    setLoading(true);
    await axios.post('../../mission', {
      params: {
        robot_latitude: lat,
        robot_longitude: long,
        traversal_type: travType,
        base_latitude: baseLat,
        base_longitude: baseLong
      }
    }).then(response => {
      setLoading(false);
      navigate('/overview')
    }).catch(response => {
      setErrorMessage(response.response.data.error);
      setLoading(false);
    })
  }

  return (
    <>
      <div className='App'>
        <div className='header'>
          <div className='logo'>
            <img style={{ "width": '150px', 'marginLeft': '50px', 'marginTop': '10px' }} src={require('./Images/logo.png')} />
          </div>
        </div>

        {page === 0 ?
          <div className='form-container'>
            <div className='form idk'>
              <h2>Setup</h2>
              <form onSubmit={handleSetup}>
                <div className='input-box'>
                  <input type={"text"} value={"nexus"} placeholder={"Username"} onChange={(e) => setUsername(e.target.value)} required />
                </div>

                <div className='input-box'>
                  <input type={"password"} value={"raspberry"} placeholder={"Password"} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <div className='input-box'>
                  <input type={"text"} placeholder={"IP Address"} onChange={(e) => setIP(e.target.value)} required />
                </div>

                <div className='errorMessage'>
                  {errorMessage}
                </div>

                {loading ?
                  <div className='input-box button loading'>
                    <input style={{ "color": "white" }} type={"submit"} value="Connecting to Robot..." />
                  </div>
                  :
                  <div className='input-box button'>
                    <input style={{ "color": "white" }} type={"submit"} value="Connect to Robot" />
                  </div>
                }

              </form>
            </div>
          </div>
          :
          <div className='form-container'>
            <div className='form '>
              <form style={{ 'marginTop': '0px' }} onSubmit={handleMission}>
                <div className='mission-row'>
                  <div className='col'>
                    <h2>Robot</h2>
                    <div className='input-box'>
                      <input type={"text"} placeholder={"Robot Latitude"} onChange={(e) => setLat(e.target.value)} required />
                    </div>

                    <div className='input-box'>
                      <input type={"text"} placeholder={"Robot Longitude"} onChange={(e) => setLong(e.target.value)} required />
                    </div>

                    <h2>Traversal Type</h2>

                    <div>
                      <input className='radio' type={"radio"} value={"lawnmower"} checked={travType === "lawnmower"} onChange={(e) => {
                        setTravType(e.target.value)
                      }} />
                      <label htmlFor='Lawnmower'>Lawnmower</label>
                    </div>

                    <div>
                      <input className='radio' type={"radio"} value={"spiral"} checked={travType === "spiral"} onChange={(e) => {
                        setTravType(e.target.value)
                      }} />
                      <label htmlFor='Spiral'>Spiral</label>
                    </div>

                    <div>
                      <input className='radio' type={"radio"} value={"lawnmower b"} checked={travType === "lawnmower b"} onChange={(e) => {
                        setTravType(e.target.value)
                      }} />
                      <label htmlFor='Lawnmower B'>Lawnmower B</label>
                    </div>



                  </div>
                  <div className='right col'>
                    <h2>Grid</h2>
                    {/* still need to change the actual methods!*/}
                    <div className='input-box'>
                      <input type={"text"} placeholder={"Latitude"} onChange={(e) => setGridLat(e.target.value)} required />
                    </div>

                    <div className='input-box'>
                      <input type={"text"} placeholder={"Longitude"} onChange={(e) => setGridLong(e.target.value)} required />
                    </div>



                    <h2>Base Station</h2>

                    <div className='input-box'>
                      <input type={"text"} placeholder={"Base Station Latitude"} onChange={(e) => setBaseLat(e.target.value)} required />
                    </div>

                    <div className='input-box'>
                      <input type={"text"} placeholder={"Base Station Longitude"} onChange={(e) => setBaseLong(e.target.value)} required />
                    </div>

                    <div className='errorMessage'>
                      {errorMessage}
                    </div>

                  </div>

                </div>

                {loading ?
                  <div className='input-box button loading'>
                    <input style={{ "color": "white" }} type={"submit"} value="Initializing Robot..." />
                  </div>
                  :
                  <div className='input-box button'>
                    <input style={{ "color": "white" }} type={"submit"} value="Initialize Robot" />
                  </div>
                }
              </form>
            </div>
          </div>
        }

      </div >
    </>
  );
}

export default App;
