import "./metrics.css";
import Sidebar from "../../components/sidebar/sidebar";
import Clock from "../../components/clock/clock";

function Metrics() {
  return (
    <div className="Metrics-overview">
      <div>
        <Sidebar />
      </div>
      <div className="Metrics-component">
        <div className="clock">
          <Clock />
        </div>
        <h1 id="Metrics-title">Metrics Details</h1>
        <div className="Metrics-wrapper">
          <div className="Metrics-subcomponent">
            <h1 id="Goal-title">Goal Location</h1>
            <p>Global Coord: (Lat, Long)</p>
            <p>Local Coord: (Grid-X, Grid-Y)</p>
            <p>Goal-Dist: 3.141592 m</p>
          </div>
          <div className="Metrics-subcomponent">
            <h1 id="Robot-title">Robot State</h1>
            <p>Global Coord: (Lat, Long)</p>
            <p>Local Coord: (Grid-X, Grid-Y)</p>
            <p>Heading: 90°</p>
          </div>
          <div className="Metrics-subcomponent">
            <h1 id="Misc-title">Miscellaneous</h1>
            <p>Phase: Recharge</p>
            <p>ETA(base): 00:27:45</p>
            <p>G-Nodes Complete: 7</p>
            <p>ETA(done): 02:27:45</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Metrics;
