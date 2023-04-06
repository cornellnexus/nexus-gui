import './shell.css'
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Sidebar from './sidebar';

function Shell() {

    const [command, setCommand] = useState();
    const [responses, setResponses] = useState([]);
    const [connectedToPi, setConnectedToPi] = useState(false)
    const [cwd, setCwd] = useState()

    const currentdate = new Date();
    const currentDateString = currentdate.toDateString()
    const currentDateHours = currentdate.getHours()
    const currentDateMinutes = currentdate.getMinutes()
    const currentDateSeconds = currentdate.getSeconds()

    useEffect(() => {
        pageLoad()
    })

    const commandsEndRef = useRef(null)

    const scrollToBottom = () => {
        commandsEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [responses, connectedToPi]);

    // Run on page load to ensure there is a connection to the pi
    const pageLoad = async (e) => {
        const data = await axios.get('../../../shell-mount', {}).catch(response => {
            setConnectedToPi(false)
        })
        if (data) {
            setConnectedToPi(true)
            setCwd(data.data.pwd)
        }
    }

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
                    "command": cwd + ' > ' + command,
                    "response": data.data.data  
                }
            ]) : setResponses((prevResponses) => [
                ...prevResponses,
                {
                    "command": cwd + ' > ' + command,
                    "response": ""
                }
            ]);
        }).catch(response => {
            setResponses((prevResponses) => [
                ...prevResponses,
                {
                    "command": cwd + ' > ' + command,
                    "response": response.response.data
                }
            ]);
        })
        setCommand("")
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
                    <pre className='terminalText' style={{'paddingTop': '1%'}}><output>Welcome to the Nexus Shell!</output></pre>
                    {connectedToPi ?
                        <></>
                        // <pre className='terminalText' style={{'paddingBottom': '1%'}}><output>Last command sent on {currentDateString} at {currentDateHours == 12 || currentDateHours == 24? 12 : currentDateHours % 12}:{currentDateMinutes}:{currentDateSeconds} {currentDateHours > 12? "AM" : "PM"}</output></pre>
                    : 
                        <></>
                    }
                    {responses.map((content) => (
                        <>
                            <p className='terminalText'>{content.command}</p>
                            <p className='terminalText'>{content.response}</p>
                            <br></br>
                        </>
                    ))}
                    {connectedToPi ?
                        <></>
                    : 
                        responses.length > 1 ? 
                            <pre className='terminalText' style={{'paddingBottom': '1%'}}><output>Lost connection to the robot. Please check your connection and refresh the page.</output></pre>
                        :
                            <pre className='terminalText' style={{'paddingBottom': '1%'}}><output>Could not connect to the Nexus Robot. Please check your connection and refresh the page.</output></pre>
                    }
                    <div ref={commandsEndRef} />
                    {connectedToPi ?
                        <form onSubmit={handleSubmit}>
                            <label style={{'paddingBottom': '0.1%'}}>
                                <span className='terminalText'>{cwd} &gt;</span>
                                <input size={"100"} style={{'fontSize': '12px'}} autoFocus className='terminalText terminalCommand' value={command} type={"text"} onChange={(e) => setCommand(e.target.value)}/>
                            </label>
                        </form>
                    : 
                    <></>}
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Shell