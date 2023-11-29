import "./goal_location.css";
import "./metrics.css";
import "../subcomponents.css";


function Goal_Location() {
  return (
    <div className="subcomponent">
      <h1 className="subcomponent-title">Goal Location</h1>
      <p>Global Coord: (Lat, Long)</p>
      <p>Local Coord: (Grid-X, Grid-Y)</p>
      <p>Goal-Dist: 3.141592</p>
    </div>
  )
}

export default Goal_Location;