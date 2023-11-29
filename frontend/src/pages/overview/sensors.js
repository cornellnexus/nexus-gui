import "./sensors.css";
import Sidebar from "../../components/sidebar/sidebar";
import Clock from "../../components/clock/clock";
import Breakbeams from "./subcomponents/sensors/breakbeams";
import IMU from "./subcomponents/sensors/imu";
import Ultrasonic from "./subcomponents/sensors/ultrasonic";
import GPS from "./subcomponents/sensors/gps";
import Cams from "./subcomponents/sensors/cams";
import Wheel_Motors from "./subcomponents/sensors/wheel_motor";

function Sensors() {
  return (
    <div className="Sensors-overview">
      <div>
        <Sidebar />
      </div>
      <div className="Sensors-component">
        <div className="clock">
          <Clock />
        </div>
        <h1 id="Sensors-title">Sensors Details</h1>
        <div className="top-row">
          <div className="Sensors-wrapper">
            <Breakbeams />
            <IMU />
            <Ultrasonic />
          </div>
          <div className="bottom-row">
            <div className="Sensors-wrapper">
              <GPS />
              <Cams />
              <Wheel_Motors />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sensors;
