import "./navbar.css";
import { Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <img className="nav-logo" src={require("../../assets/logo.png")} />
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Navbar;
