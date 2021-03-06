import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useAuthContext } from "./Index";
import { toast } from "react-hot-toast";
import { likesReducer } from "../Reducer/LikesReducer";

const initialState = {
  likedVideo: [],
};

const LikesContext = createContext();

export const LikesContextProvider = ({ children }) => {
  const { isAuth } = useAuthContext();

  const [state, likesDispatch] = useReducer(likesReducer, initialState);
  const { likedVideo } = state;

  // Getting data from liked video and dispatching to initial state
  useEffect(() => {
    // eslint-disable-next-line no-lone-blocks

    if (isAuth) {
      (async () => {
        try {
          const {
            data: { likes },
            status,
          } = await axios.get("/api/user/likes", {
            headers: {
              authorization: isAuth,
            },
          });

          if (status === 200) {
            likesDispatch({ type: "GET_LIKED_VIDEO", payload: likes });
          }
        } catch (error) {
          const {
            data: { errors },
          } = error.response;

          toast.error(...errors, { position: "top-right" });
        }
      })();
    } else {
      likesDispatch({ type: "GET_LIKED_VIDEO", payload: [] });
    }
  }, [isAuth]);

  const saveLikedVideo = async (video) => {
    if (likedVideo.find((eachVideo) => eachVideo._id === video._id)) {
      toast.error("Video already liked!", { position: "top-right" });
      return;
    } else {
      try {
        const {
          status,
          data: { likes },
        } = await axios.post(
          "/api/user/likes",
          { video },
          {
            headers: {
              authorization: isAuth,
            },
          }
        );

        if (status === 201) {
          toast.success("Successfully Added!", { position: "top-right" });
          likesDispatch({ type: "SAVED_LIKED_VIDEO", payload: likes });
        }
      } catch (error) {
        const {
          data: { errors },
        } = error.response;

        toast.error(...errors, { position: "top-right" });
      }
    }
  };

  const removeLikedVideo = async (videoId) => {
    if (likedVideo.find((eachVideo) => eachVideo._id === videoId)) {
      try {
        const {
          status,
          data: { likes },
        } = await axios.delete(`/api/user/likes/${videoId}`, {
          headers: {
            authorization: isAuth,
          },
        });

        if (status === 200) {
          toast.success("Video Removed!", { position: "top-right" });
          likesDispatch({ type: "REMOVE_LIKED_VIDEO", payload: likes });
        }
      } catch (error) {
        const {
          data: { errors },
        } = error.response;

        toast.error(...errors, { position: "top-right" });
      }
    }
  };

  return (
    <LikesContext.Provider value={{ state, saveLikedVideo, removeLikedVideo }}>
      {children}
    </LikesContext.Provider>
  );
};

export const useLikesContext = () => useContext(LikesContext);
