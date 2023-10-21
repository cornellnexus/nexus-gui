import "./overview.css";
import Sidebar from "../../components/sidebar/sidebar";
import Clock from "../../components/clock/clock";

// https://www.youtube.com/watch?v=wYpCWwD1oz0

function Overview() {
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
            <h3 className="Subcomponent-title">Battery</h3>
          </div>
          <div className="Subcomponent">
            <h3 className="Subcomponent-title">Sensors</h3>
          </div>
          <div id="Final-subcomponent">
            <h3 className="Subcomponent-title">Metrics</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
