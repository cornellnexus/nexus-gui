import './overview.css'
import Sidebar from './sidebar'

// https://www.youtube.com/watch?v=wYpCWwD1oz0

function Overview() {
    return (
        <div className='Overview'>
            <div>
                <Sidebar />
            </div>
            <div>
                <h1>Overview</h1>
            </div>
        </div>
    )
}

export default Overview