import "./battery.css";
import Sidebar from "../../components/sidebar/sidebar";
import Clock from "../../components/clock/clock";
import { useNavigate } from "react-router-dom";

function Battery() {
  let navigate = useNavigate();

  return (
    <div className="Battery-overview">
      <div>
        <Sidebar />
      </div>
      <div className="Battery-component">
        <div className="clock">
          <Clock />
        </div>
        <h1 id="Battery-title">Battery</h1>
      </div>
    </div>
  );
}
export default Battery;
