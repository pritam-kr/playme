/* eslint-disable no-lone-blocks */
import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useAuthContext } from "./Index";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { playlistReducer } from "../Reducer/Index";

const PlayListContext = createContext();

const initialState = {
  playlists: []  
};

export const PlayListContextProvider = ({ children }) => {
  const { isAuth } = useAuthContext();

  const [state, playlistDispatch] = useReducer(playlistReducer, initialState);
  const {  playlists } = state;
 
  //getting playlists from backend
  useEffect(() => {
    // eslint-disable-next-line no-lone-blocks
    {
      isAuth &&
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
            toast.error("Error occurred While fetching playlist");
          }
        })();
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
        toast.error("Error occurred in  Create play list.", {
          position: "top-right",
        });
      }
    }
  };

  //Add to playlist 
  const addToPlayList = async(newData, video) => {
    
    const {_id} = newData
  
    try{
      const  {data: {playlist}, status}= await axios.post(`/api/user/playlists/${_id}`, {video}, {
        headers: {authorization: isAuth}
      })

        if(status===201){
          playlistDispatch({type: "ADD_TO_PLAYLIST", payload: playlist})
          toast.success(`Added video to playlist ${playlist.title}`,{position: "top-right"})
        }
      
    }catch(error){
      // const {data: {errors}} = error.response;
      // const gettingError  = [...errors]
      // toast.error( `${gettingError}`,{position: "top-right"})
    }

  }

  //Delete Playlist
  const deletePlaylist = async(playlistID) =>{

    try{
      const {data: {playlists}, status} = await axios.delete(`/api/user/playlists/${playlistID}`, {headers: {authorization: isAuth}})
      
      if(status === 200){
        toast.success("Playlist Deleted", {position: "top-right"})
        playlistDispatch({type: "DELETE_PLAYLISTS", payload: playlists})
      }

    }catch(error){

    }

  }

  //Delete Particular video from particular playlist 
  const deleteParticularVideo = async (videoID, playlistID) => {
     
    try{
        const {data:{playlist}, status} = await axios.delete(`/api/user/playlists/${playlistID}/${videoID}`, {headers: {authorization: isAuth}})
     
        if(status === 200){
          toast.success(`Video Deleted from ${playlist.title}`, {position: "top-right"})
          playlistDispatch({type: "DELETE_PARTICULAR_VIDEO", payload: playlist})
        }
         
    }catch(error){
        toast.error(`Error occured white deleting particular video ${error.message}}`, {position: "top-right"})
    }


  }

  return (
    <PlayListContext.Provider
      value={{ state, playlistDispatch, createPlaylist, addToPlayList, deleteParticularVideo, deletePlaylist }}
    >
      {children}
    </PlayListContext.Provider>
  );
};

export const usePlaylistContext = () => useContext(PlayListContext);