import axios from "axios";
import { createContext, useContext, useReducer, useState } from "react";
import { useEffect } from "react";
import { videoReducer } from "../Reducer/Index";
import { uniqueCategory, filterByCategory } from "../Utils/Index";

const VideoContext = createContext();

const initialState = {
  videos: [],
  categoryName: "ALL",
};

export const VideoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, initialState);
  const { videos, categoryName } = state;

  //Use State for Sidebar
  const [activeSidebar, setActiveSidebar] = useState(true);

  // getting all categories name
  const getUniqueCategory = uniqueCategory(videos, "categoryName");

  //filter by Category
  const getFilteredVideo = filterByCategory(videos, categoryName);

  // Fetching Data from Backend
  useEffect(() => {
    (async () => {
      const {
        status,
        data: { videos },
      } = await axios.get("/api/videos");

      if (status === 200) {
        dispatch({ type: "GET_VIDEO", payload: videos });
      }
    })();
  }, []);

  return (
    <VideoContext.Provider
      value={{
        state,
        dispatch,
        getUniqueCategory,
        getFilteredVideo,
        setActiveSidebar,
        activeSidebar,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => useContext(VideoContext);
