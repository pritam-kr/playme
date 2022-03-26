import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import { videoReducer } from "../Reducer/Index";
import { uniqueCategory, filterByCategory } from "../Utils/Index";

 
const VideoContext = createContext();

const initialState = {
  videos: [],
  categoryName: [],
};

export const VideoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, initialState);
  const { videos, categoryName } = state;

  console.log(videos)

  // getting all categories name
  const getUniqueCategory = uniqueCategory(videos, "categoryName");


//filter by Category
const getFilteredVideo = filterByCategory(videos, categoryName)

 
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
    <VideoContext.Provider value={{ state, dispatch, getUniqueCategory, getFilteredVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => useContext(VideoContext);
