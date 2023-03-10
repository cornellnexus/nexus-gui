import './shell.css'
import { useState } from 'react';
import axios from 'axios';

function Shell() {

    const [command, setCommand] = useState();
    const [responses, setResponses] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await axios.post('../../../shell', {
          params: {
            command: command
        }
        }).catch(response => {
            console.log(response)
            setResponses((prevResponses) => [
                ...prevResponses,
                {
                    "command": command,
                    "response": "error - " + response.response.data
                }
            ]);
        })
        if (data != undefined) {
            // console.log(data)
            setResponses((prevResponses) => [
                ...prevResponses,
                {
                    "command": command,
                    // Change probably to see correct format of return json
                    "response": data.data   
                }
            ]);
        }  
      }

    return (
        <>
            <h1>Scripts</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Command:
                    <br></br>
                    <input type={"text"} onChange={(e) => setCommand(e.target.value)}/>
                </label>
                    <br></br>
                    <input type="submit" value="Connect to Robot" />
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
        </>
    )
}

export default Shell