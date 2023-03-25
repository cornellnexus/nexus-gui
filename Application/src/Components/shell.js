import './shell.css'
import { useState } from 'react';
import axios from 'axios';
import Sidebar from './sidebar';

function Shell() {

    const [command, setCommand] = useState();
    const [responses, setResponses] = useState([]);

    // Posts command to backend, which will run the command on the Pi and return the response
    // Adds response to responses array, which is displayed on screen
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await axios.post('../../../shell', {
            params: {
                command: command
            }
        }).then(response => {
            response ?
                setResponses((prevResponses) => [
                ...prevResponses,
                {
                    "command": command,
                    "response": data.data.data  
                }
            ]) : setResponses((prevResponses) => [
                ...prevResponses,
                {
                    "command": command,
                    "response": "Command ran but no output"  
                }
            ]);
        }).catch(response => {
            setResponses((prevResponses) => [
                ...prevResponses,
                {
                    "command": command,
                    "response": "error - " + response.response.data
                }
            ]);
        })

    }

    return (
        <div className='Shell'>
            <div>
                <Sidebar />
            </div>
            <div>
                <div>
                    <h1>Shell</h1>
                </div>
                
                <div className='terminalContainer'>
                <form onSubmit={handleSubmit}>
                    <label>
                        Command:
                        <br></br>
                        <input type={"text"} onChange={(e) => setCommand(e.target.value)}/>
                    </label>
                        <br></br>
                        <input type="submit" value="Run" />
                </form>
                {responses.map((content) => (
                    <>
                        <span>Command: {content.command}</span>
                        <br></br>
                        <span>Response: {content.response}</span>
                        <br></br>
                        <br></br>
                    </>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Shell