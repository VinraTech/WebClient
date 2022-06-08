import "./App.css";

import { Routes, Route } from "react-router-dom";
import MlmHome from "./container/MLM Engine/MLMHOME/MlmHome";
import Dashboard from "./container/MLM Engine/mlm component/Dashboard/Dashboard";
import Allaporavalpending from "./container/MLM Engine/mlm component/Dashboard/ALLAPPORVALPENDING/Allaporavalpending";
import Login from "./component/SuperAdminAuth/Login";

function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Login/>}>
        </Route>
        <Route path="/mlmEngineDashboard" element={<MlmHome />}>
          <Route path="approvalpending" element={<Allaporavalpending />} />
          <Route index element={<Dashboard />}></Route>
        </Route>
      
      </Routes>
    </div>
  );
}

export default App;