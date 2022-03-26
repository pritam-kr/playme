import "./App.css";
import { Home } from "./Pages/Index";
import { Routes, Route, useLocation } from "react-router-dom";
import { Explore,Login, Playlist, SingleVideo } from "./Pages/Index";
import {Sidebar, Topbar,MockAPI} from "./Component/index"


function App() {

  const {pathname} = useLocation() 

  const SideBar = () => {

    if(pathname !== "/login" && pathname !== "/" && pathname !== "/signup" && pathname !== "/mockman"){
          return <Sidebar />
    }
    return null

  }

  return (
    <div className="app-container">

      {pathname !== "/" && <Topbar />}
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/login" element={<Login />} > </Route>
        <Route path="/playlist" element={<Playlist />} > </Route> 
        <Route path="/video/:videoId" element={<SingleVideo />} > </Route>
        <Route path="/mockman" element={<MockAPI />} > </Route>
      </Routes>
    </div>
  ); 
}

export default App;
