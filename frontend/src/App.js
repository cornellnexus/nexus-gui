import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Login from "./pages/login/login";
import Mission from "./pages/mission/mission";
import Overview from "./pages/overview/overview";
import Shell from "./pages/shell/shell";
import Settings from "./pages/settings/settings";
import Sensors from "./pages/overview/sensors";
import Battery from "./pages/overview/battery";
import Metrics from "./pages/overview/metrics";
import Custom from "./pages/overview/custom/custom";
import Main_Page from "./pages/overview/custom/main_page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="" element={<Login />} />
        </Route>
        <Route path="/mission" element={<Mission />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/shell" element={<Shell />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/battery" element={<Battery />} />
        <Route path="/metrics" element={<Metrics />} />
        <Route path="/sensors" element={<Sensors />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/customview" element={<Main_Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
