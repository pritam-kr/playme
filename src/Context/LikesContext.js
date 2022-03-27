import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import axios from "axios";
import { useAuthContext } from "./Index";

const initialState = {
  likedVideo: [],
};

const LikesContext = createContext();

const likesReducer = (state, action) => {
    switch(action.type){
        case "GET_LIKED_VIDEO":
        return {...state, likedVideo: [...state.likedVideo, ...action.payload]}
        default:
        return state
    }
};

export const LikesContextProvider = ({ children }) => {
  const { isAuth } = useAuthContext();
  const [state, dispatch] = useReducer(likesReducer, initialState);
  
  //  Getting data from liked video and dispatching to initial state
  useEffect(() => {
    // eslint-disable-next-line no-lone-blocks
    {
      isAuth && (async () => {
            try{
                const {data: {likes}, status} = await axios.get('/api/user/likes', {
                    headers: {
                        authorization: isAuth,
                      },
                })

                if(status === 200){
                    dispatch({type: "GET_LIKED_VIDEO", payload: likes})
                }
                 
                 
            }
            catch(error){
                console.log(error.response)
            }
      })();

      
    }
  }, [isAuth]);

  return (
    <LikesContext.Provider value={{ state, dispatch }}>
      {children}
    </LikesContext.Provider>
  );
};

export const useLikesContext = () => useContext(LikesContext);
