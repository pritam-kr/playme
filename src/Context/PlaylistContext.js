/* eslint-disable no-lone-blocks */
import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useAuthContext } from "./Index";
import { toast } from "react-hot-toast";
import { playlistReducer } from "../Reducer/Index";

const PlayListContext = createContext();

const initialState = {
  playlists: [],
};

export const PlayListContextProvider = ({ children }) => {
  const { isAuth } = useAuthContext();

  const [state, playlistDispatch] = useReducer(playlistReducer, initialState);

  //getting playlists from backend
  useEffect(() => {
    // eslint-disable-next-line no-lone-blocks

    if (isAuth) {
      (async () => {
        try {
          const {
            data: { playlists },
            status,
          } = await axios.get("/api/user/playlists", {
            headers: {
              authorization: isAuth,
            },
          });

          if (status === 200) {
            playlistDispatch({
              type: "GET_PLAYLISTS",
              payload: playlists,
            });
          }
        } catch (error) {
          const {
            data: { errors },
          } = error.response;

          toast.error(...errors, { position: "top-right" });
        }
      })();
    } else {
      playlistDispatch({ type: "CREATE_PLAYLIST", payload: [] });
    }
  }, [isAuth]);

  // create playlist
  const createPlaylist = async (name) => {
    const { playlist } = name;
    {
      try {
        const {
          status,
          data: { playlists },
        } = await axios.post(
          "/api/user/playlists",
          { playlist: { title: playlist } },
          {
            headers: {
              authorization: isAuth,
            },
          }
        );

        if (status === 201) {
          toast.success("Playlist Created.", { position: "top-right" });
          playlistDispatch({ type: "CREATE_PLAYLIST", payload: playlists });
        }
      } catch (error) {
        const {
          data: { errors },
        } = error.response;

        toast.error(...errors, { position: "top-right" });
      }
    }
  };

  //Add to playlist
  const addToPlayList = async (newData, video) => {
    const { _id } = newData;

    try {
      const {
        data: { playlist },
        status,
      } = await axios.post(
        `/api/user/playlists/${_id}`,
        { video },
        {
          headers: { authorization: isAuth },
        }
      );

      if (status === 201) {
        playlistDispatch({ type: "ADD_TO_PLAYLIST", payload: playlist });
        toast.success(`Added video to playlist ${playlist.title}`, {
          position: "top-right",
        });
      }
    } catch (error) {
      const {
        data: { errors },
      } = error.response;

      toast.error(...errors, { position: "top-right" });
    }
  };

  //Delete Playlist
  const deletePlaylist = async (playlistID) => {
    try {
      const {
        data: { playlists },
        status,
      } = await axios.delete(`/api/user/playlists/${playlistID}`, {
        headers: { authorization: isAuth },
      });

      if (status === 200) {
        toast.success("Playlist Deleted", { position: "top-right" });
        playlistDispatch({ type: "DELETE_PLAYLISTS", payload: playlists });
      }
    } catch (error) {
      const {
        data: { errors },
      } = error.response;

      toast.error(...errors, { position: "top-right" });
    }
  };

  //Delete Particular video from particular playlist
  const deleteParticularVideo = async (videoID, playlistID) => {
    try {
      const {
        data: { playlist },
        status,
      } = await axios.delete(`/api/user/playlists/${playlistID}/${videoID}`, {
        headers: { authorization: isAuth },
      });

      if (status === 200) {
        toast.success(`Video Deleted from ${playlist.title}`, {
          position: "top-right",
        });
        playlistDispatch({
          type: "DELETE_PARTICULAR_VIDEO",
          payload: playlist,
        });
      }
    } catch (error) {
      const {
        data: { errors },
      } = error.response;

      toast.error(...errors, { position: "top-right" });
    }
  };

  return (
    <PlayListContext.Provider
      value={{
        state,
        playlistDispatch,
        createPlaylist,
        addToPlayList,
        deleteParticularVideo,
        deletePlaylist,
      }}
    >
      {children}
    </PlayListContext.Provider>
  );
};

export const usePlaylistContext = () => useContext(PlayListContext);
