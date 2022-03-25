import "./App.css";
import { Home } from "./Pages/Index";
import { Routes, Route, useLocation } from "react-router-dom";
import { Explore,Login,  } from "./Pages/Index";
import {Topbar, Sidebar} from "./Component/index"


function App() {

  const {pathname} = useLocation() 
  

  return (
    <div className="app-container">
      {pathname !== "/" && <Topbar />}
      {/* {pathname !== "/" && <Sidebar />} */}
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/login" element={<Login />} > </Route>
      </Routes>
    </div>
  ); 
}

export default App;
