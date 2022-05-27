import "./App.css";
import MainPageAfterAuth from "./component/AfterSuperAdminAuth/MainPageAfterAuth";
import SuperAdminAuth from "./component/SuperAdminAuth/SuperAdminAuth";
import { Routes, Route } from "react-router-dom";
import MlmHome from "./container/MLM Engine/MLMHOME/MlmHome";
import Dashboard from "./container/MLM Engine/mlm component/Dashboard/Dashboard";
import Allaporavalpending from "./container/MLM Engine/mlm component/Dashboard/ALLAPPORVALPENDING/Allaporavalpending";
function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<SuperAdminAuth />}></Route>
        <Route path="/mainDashBoard" element={<MainPageAfterAuth />} />
        <Route path="/mlmEngineDashboard" element={<MlmHome />}>
          <Route path="approvalpending" element={<Allaporavalpending />} />
          <Route index element={<Dashboard />}></Route>
        </Route>
        <Route path="/mlmEcommerceDashboard"></Route>
        <Route path="/mobileAppDashboard"></Route>
      </Routes>
    </div>
  );
}

export default App;
