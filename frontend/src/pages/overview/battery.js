import "./battery.css";
import Sidebar from "../../components/sidebar/sidebar";
import Clock from "../../components/clock/clock";

function Battery() {
  return (
    <div className="Battery-overview">
      <div>
        <Sidebar />
      </div>
      <div className="Battery-component">
        <div className="clock">
          <Clock />
        </div>
        <h1 id="Battery-title">Battery Details</h1>
        <div className="Battery-wrapper">
          <div className="Battery-subcomponent">
            <p>Battery percentage: 54%</p>
            <p>Low Power Mode: On/Off</p>
            <p>Time Till Recharge: 03:45:13</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Battery;
