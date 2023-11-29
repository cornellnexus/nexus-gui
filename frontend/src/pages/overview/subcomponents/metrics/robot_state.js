import "./robot_state.css";
import "./metrics.css";
import "../subcomponents.css";


function Robot_State() {
  return (
    <div className="subcomponent">
      <h1 className="subcomponent-title">Robot State</h1>
      <p>Global Coord: (Lat, Long)</p>
      <p>Local Coord: (Grid-X, Grid-Y)</p>
      <p>Heading: 90°</p>
    </div>
  )
}

export default Robot_State;