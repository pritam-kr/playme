import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useAuthContext } from "./Index";
import { watchLaterReducer } from "../Reducer/Index";

const WatchLaterContext = createContext();

const initialState = {
  watchLater: [],
};

export const WatchLaterContextProvider = ({ children }) => {
  const { isAuth } = useAuthContext();

  const [state, watchLaterDispatch] = useReducer(
    watchLaterReducer,
    initialState
  );
  const { watchLater } = state;

  // Getting data from watchlater video and dispatching to initial state
  useEffect(() => {
    // eslint-disable-next-line no-lone-blocks
    {
      isAuth &&
        (async () => {
          try {
            const {
              data: { watchLater },
              status,
            } = await axios.get("/api/user/watchLater", {
              headers: {
                authorization: isAuth,
              },
            });

            if (status === 200) {
              watchLaterDispatch({
                type: "GET_WATCHLATER_VIDEO",
                payload: watchLater,
              });
            }
          } catch (error) {
            const {
              data: { errors },
            } = error.response;

            toast.error(...errors , {
              position: "top-right",
            });
          }
        })();
    }
  }, [isAuth]);

  //Add to watchlater
  const addToWatchLater = async (video) => {
    if (watchLater.find((eachVideo) => eachVideo._id === video._id)) {
      toast.error("Video already Added to watch Later!", {
        position: "top-right",
      });
      return; 
    } else {
      try {
        const {
          status,
          data: { watchLater },
        } = await axios.post(
          "/api/user/watchLater",
          { video },
          {
            headers: {
              authorization: isAuth,
            },
          }
        );

        if (status === 201) {
          toast.success("Successfully Added!", { position: "top-right" });
          watchLaterDispatch({
            type: "SAVED_WATCHLATER_VIDEO",
            payload: watchLater,
          });
        }
      } catch (error) {
        const {
          data: { errors },
        } = error.response;

        toast.error(...errors, { position: "top-right" });
      }
    }
  };

  //remove to watchlater video
  const removeWatchLater = async (videoId) => {
    // const { _id } = video;

    if (watchLater.find((eachVideo) => eachVideo._id === videoId)) {
      try {
        const {
          status,
          data: { watchLater },
        } = await axios.delete(`/api/user/watchLater/${videoId}`, {
          headers: {
            authorization: isAuth,
          },
        });

        if (status === 200) {
          toast.success("Video Removed!", { position: "top-right" });
          watchLaterDispatch({
            type: "REMOVE_WATCHLATER_VIDEO",
            payload: watchLater,
          });
        }
      } catch (error) {
        const {
          data: { errors },
        } = error.response;

        toast.error(...errors , { position: "top-right" });
      }
    }
  };

  return (
    <WatchLaterContext.Provider
      value={{ state, watchLaterDispatch, addToWatchLater, removeWatchLater }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

export const useWatchLaterContext = () => useContext(WatchLaterContext);
