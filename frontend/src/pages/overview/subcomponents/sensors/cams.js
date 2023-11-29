import "./sensors.css";
import "../subcomponents.css";


function Cams() {
  return (
    <div className="subcomponent">
      <h1 className="subcomponent-title">Cams</h1>
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
  )
}
export default Cams;
