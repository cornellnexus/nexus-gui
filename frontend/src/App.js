import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Login from "./pages/login/login";
import Mission from "./pages/mission/mission";
import Overview from "./pages/overview/overview";
import Shell from "./pages/shell/shell";
import Settings from "./pages/settings/settings";
import Battery from "./pages/overview/battery";
import Metrics from "./pages/overview/metrics";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
