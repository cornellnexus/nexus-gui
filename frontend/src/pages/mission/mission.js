import './mission.css'
import { useLocation, useNavigate } from 'react-router-dom';

function Mission() {
    const location = useLocation();

    return (
        <>
            <h1>Mission</h1>
            <p>{location.state.ip}</p>
        </>
    )
}

export default Mission