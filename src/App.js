import "./App.css";
import { Home, SortByLatest } from "./Pages/Index";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Explore, Login, Playlist, SingleVideo,Signup, WatchLater , Likes, History,PlaylistVideos,Profile} from "./Pages/Index";
import {Sidebar, Topbar,MockAPI} from "./Component/index"
import {useAuthContext} from "./Context/Index"
import {Toaster} from "react-hot-toast"
import {Scroll, PrivateRoute} from "./Hooks/Index"
 

function App() {

  const {isAuth} = useAuthContext()
  const {pathname} = useLocation() 


  const SideBar = () => {
    if(pathname !== "/login" && pathname !== "/" && pathname !== "/signup" && pathname !== "/mockman"){
          return <Sidebar />
    }
    return null
  }
 
  return (
    <>
    <Toaster />
    <div className="app-container">
      {pathname !== "/" && <Topbar />}
      <SideBar />
      <Scroll>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/explore" element={<Explore />}></Route>
        {!isAuth && <Route path="/login" element={<Login />} > </Route>} 
        <Route path="/signup" element={<Signup />} ></Route>
        <Route path="/playlist" element={<PrivateRoute><Playlist /></PrivateRoute>} > </Route> 
        <Route path="/video/:videoId" element={<SingleVideo />} > </Route>
        <Route path="/mockman" element={<MockAPI />} > </Route>
        <Route path="/history" element={<PrivateRoute><History /></PrivateRoute>} > </Route>
        <Route path="/likes" element={<PrivateRoute><Likes /></PrivateRoute>} > </Route>
        <Route path="/watchlater" element={<PrivateRoute><WatchLater /></PrivateRoute>} > </Route>
        <Route path="/*" element={<Navigate  to="/explore" />}></Route> 
        <Route path="/playlist/:playlistId" element={<PrivateRoute><PlaylistVideos /></PrivateRoute>} > </Route>
        <Route path="/latest" element={<SortByLatest />} ></Route>
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} ></Route>
      </Routes>
      </Scroll>
    </div>
    </>
  ); 
}

export default App;
