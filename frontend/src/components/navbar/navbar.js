import "./navbar.css";
import { Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <h1>Nav</h1>
      <Outlet />
    </>
  );
}

export default Navbar;
