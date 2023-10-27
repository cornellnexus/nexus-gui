import "./overview.css";
import Sidebar from "../../components/sidebar/sidebar";
import Clock from "../../components/clock/clock";
import { useNavigate } from "react-router-dom";

// https://www.youtube.com/watch?v=wYpCWwD1oz0

function Overview() {
  let navigate = useNavigate();

  return (
    <div className="Overview">
      <div>
        <Sidebar />
      </div>
      <div className="Overview-component">
        <div className="clock">
          <Clock />
        </div>
        <h1 id="Overview-title">Overview</h1>
        <div className="Subcomponent-wrapper">
          <div className="Subcomponent">
            <div id="Battery" onClick={() => navigate("/battery")}>
              <h3 className="Subcomponent-title">Battery</h3>
              <p>Battery Level: 54%</p>
              <p>(Battery-Life Remaining)</p>
            </div>
          </div>
          <div className="Subcomponent">
            <div id="Sensors" onClick={() => console.log("Clicked")}>
              <h3 className="Subcomponent-title">Sensors</h3>
              <p>Velocity: 12 mph</p>
              <p>Acceleration: +3 mph</p>
              <p>Location: (Lat, Long)</p>
              <p>Bucket Status: Full, Half-Full, Not Full</p>
            </div>
          </div>
          <div className="Final-subcomponent">
            <div id="Metrics" onClick={() => navigate("/metrics")}>
              <h3 className="Subcomponent-title">Metrics</h3>
              <p>Goal Location: (Lat, Long)</p>
              <p>Robot Dist. to Goal: 3.537 meters</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
