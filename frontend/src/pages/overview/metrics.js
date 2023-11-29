import "./metrics.css";
import Sidebar from "../../components/sidebar/sidebar";
import Clock from "../../components/clock/clock";
import Goal_Location from "./subcomponents/metrics/goal_location";
import Robot_State from "./subcomponents/metrics/robot_state";
import Metric_Misc from "./subcomponents/metrics/metrics_misc";

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
          <Goal_Location />
          <Robot_State />
          <Metric_Misc />
        </div>
      </div>
    </div>
  );
}
export default Metrics;
