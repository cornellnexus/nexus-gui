import "./sensors.css";
import Sidebar from "../../components/sidebar/sidebar";
import Clock from "../../components/clock/clock";

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
            <div className="Sensors-subcomponent">
              <h1 id="Breakbeams-title">Breakbeams</h1>
              <p>Half Full: True </p>
              <p>Max Full: False </p>
              <div className="sub-subcomponent">
                <div className="subsubcomponent-title">
                  <h3> Half 1: </h3>
                </div>
                <div className="subsubcomponent-parts">
                  <p>Connected: True</p>
                  <p>Blocked: False</p>
                </div>
              </div>
              <div className="sub-subcomponent">
                <div className="subsubcomponent-title">
                  <h3> Half 2: </h3>
                </div>
                <div className="subsubcomponent-parts">
                  <p>Connected: True</p>
                  <p>Blocked: False</p>
                </div>
              </div>
              <div className="sub-subcomponent">
                <div className="subsubcomponent-title">
                  <h3> Full 1: </h3>
                </div>
                <div className="subsubcomponent-parts">
                  <p>Connected: True</p>
                  <p>Blocked: False</p>
                </div>
              </div>
              <div className="sub-subcomponent">
                <div className="subsubcomponent-title">
                  <h3> Full 2: </h3>
                </div>
                <div className="subsubcomponent-parts">
                  <p>Connected: True</p>
                  <p>Blocked: False</p>
                </div>
              </div>
            </div>
            <div className="Sensors-subcomponent imu">
              <h1 id="IMU-title">IMU</h1>
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
            <div className="Sensors-subcomponent">
              <h1 id="Ultrasonic-title">Ultrasonic</h1>
              <div className="sub-subcomponent">
                <div className="subsubcomponent-title">
                  <h3> Front: </h3>
                </div>
                <div className="subsubcomponent-parts">
                  <p>Connected: True</p>
                  <p>Distance to Object: 3</p>
                </div>
              </div>
              <div className="sub-subcomponent">
                <div className="subsubcomponent-title">
                  <h3> Left 1: </h3>
                </div>
                <div className="subsubcomponent-parts">
                  <p>Connected: True</p>
                  <p>Distance to Object: 3.5</p>
                </div>
              </div>
              <div className="sub-subcomponent">
                <div className="subsubcomponent-title">
                  <h3> Left 2: </h3>
                </div>
                <div className="subsubcomponent-parts">
                  <p>Connected: True</p>
                  <p>Distance to Object: 3.5</p>
                </div>
              </div>
              <div className="sub-subcomponent">
                <div className="subsubcomponent-title">
                  <h3> Right 1: </h3>
                </div>
                <div className="subsubcomponent-parts">
                  <p>Connected: True</p>
                  <p>Distance to Object: 3.5</p>
                </div>
              </div>
              <div className="sub-subcomponent">
                <div className="subsubcomponent-title">
                  <h3> Right 2:</h3>
                </div>
                <div className="subsubcomponent-parts">
                  <p>Connected: True</p>
                  <p>Distance to Object: 3.5</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-row">
            <div className="Sensors-wrapper">
              <div className="Sensors-subcomponent">
                <h1 id="GPS-title">GPS </h1>
                <p>Connected: Yes </p>
                <div className="sub-subcomponent">
                  <div className="subsubcomponent-title">
                    <h3> Reading: </h3>
                  </div>
                  <div className="subsubcomponent-parts">
                    <p>Latitude: 0.242</p>
                    <p>Longitude: 2.142</p>
                  </div>
                </div>
              </div>
              <div className="Sensors-subcomponent">
                <h1 id="Cams-title">Cams</h1>
                <div className="sub-subcomponent">
                  <div className="subsubcomponent-title">
                    <h3> Front: </h3>
                  </div>
                  <div className="subsubcomponent-parts">
                    <p>Connected: True</p>
                    <p>Tag ID Detected: ABC123</p>
                  </div>
                </div>
                <div className="sub-subcomponent">
                  <div className="subsubcomponent-title">
                    <h3> Back: </h3>
                  </div>
                  <div className="subsubcomponent-parts">
                    <p>Connected: False</p>
                    <p>Tag ID Detected: Null</p>
                  </div>
                </div>
              </div>
              <div className="Sensors-subcomponent">
                <h1 id="Wheel-motors-title">Wheel Motors</h1>
                <p>Duty Cycle: 0.1</p>
                <p>Linear Velocity: 3.1</p>
                <p>Left Wheel Velocity: 7.4</p>
                <p>Right Wheel Velocity: 7.2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sensors;
