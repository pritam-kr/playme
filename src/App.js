import "./App.css";
import { Home } from "./Pages/Index";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Explore,Login, Playlist, SingleVideo, WatchLater , Likes, History} from "./Pages/Index";
import {Sidebar, Topbar,MockAPI} from "./Component/index"
import {useAuthContext} from "./Context/AuthContext"
import {Toaster} from "react-hot-toast"


function App() {
  const {pathname} = useLocation() 
  const SideBar = () => {
    if(pathname !== "/login" && pathname !== "/" && pathname !== "/signup" && pathname !== "/mockman"){
          return <Sidebar />
    }
    return null
  }

const PrivateRoute = ({children}) =>{
  const {isAuth} = useAuthContext()
  return isAuth ? children :  <Navigate to ="/login" />
}
  return (
    <>
    <Toaster />
    <div className="app-container">
      {pathname !== "/" && <Topbar />}
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/login" element={<Login />} > </Route>
        <Route path="/playlist" element={<PrivateRoute><Playlist /></PrivateRoute>} > </Route> 
        <Route path="/video/:videoId" element={<SingleVideo />} > </Route>
        <Route path="/mockman" element={<MockAPI />} > </Route>
        <Route path="/history" element={<PrivateRoute><History /></PrivateRoute>} > </Route>
        <Route path="/likes" element={<PrivateRoute><Likes /></PrivateRoute>} > </Route>
        <Route path="/watchlater" element={<PrivateRoute><WatchLater /></PrivateRoute>} > </Route>
      </Routes>
    </div>
    </>
  ); 
}

export default App;
