import "./battery.css";
import Sidebar from "../../components/sidebar/sidebar";
import Clock from "../../components/clock/clock";
import Battery_Comp from "./subcomponents/battery_comp";


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
          <Battery_Comp />
        </div>
      </div>
    </div>
  );
}
export default Battery;
