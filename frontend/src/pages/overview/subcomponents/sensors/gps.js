import "./sensors.css";
import "../subcomponents.css";


function GPS() {
  return (

    <div className="subcomponent">
      <h1 className="subcomponent-title">GPS </h1>
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

  )
}
export default GPS;
