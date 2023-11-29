import "./sensors.css";
import "../subcomponents.css";


function Breakbeams() {
  return (

    <div className="subcomponent">
      <h1 className="subcomponent-title">Breakbeams</h1>
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
  )
}
export default Breakbeams;
