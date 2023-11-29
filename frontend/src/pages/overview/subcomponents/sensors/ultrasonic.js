import "./sensors.css";
import "../subcomponents.css";


function Ultrasonic() {
  return (
    <div className="subcomponent">
      <h1 className="subcomponent-title">Ultrasonic</h1>
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
  )
}

export default Ultrasonic;
