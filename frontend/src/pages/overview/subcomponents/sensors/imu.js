import "./imu.css";
import "./sensors.css";
import "../subcomponents.css";


function IMU() {
  return (
    <div className="subcomponent imu">
      <h1 className="subcomponent-title">IMU</h1>
      <p>Connected: Yes </p>
      <div className="sub-subcomponent">
        <div className="subsubcomponent-title">
          <h3> Accelerometer: </h3>
        </div>
        <div className="subsubcomponent-parts">
          <p>X-Axis: 4.2</p>
          <p>Y-Axis: 3.4</p>
          <p>Z-Axis: 1.5</p>
        </div>
      </div>
      <div className="sub-subcomponent">
        <div className="subsubcomponent-title">
          <h3> Magnetometer: </h3>
        </div>
        <div className="subsubcomponent-parts">
          <p>X-Axis: 4.7</p>
          <p>Y-Axis: 2.8</p>
          <p>Z-Axis: 3.1</p>
        </div>
      </div>
      <div className="sub-subcomponent">
        <div className="subsubcomponent-title">
          <h3> Gyroscope: </h3>
        </div>
        <div className="subsubcomponent-parts">
          <p>X-Axis: 5.1</p>
          <p>Y-Axis: 2.9</p>
          <p>Z-Axis: 4.2</p>
        </div>
      </div>
    </div>

  )
}
export default IMU;
