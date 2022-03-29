import { createContext, useContext, useEffect, useReducer } from "react";
import { useAuthContext } from "./Index";
import axios from "axios";
import {toast} from "react-hot-toast"
import {historyReducer} from "../Reducer/Index"
 

const initialState = {
    watchedVideo: [],
};

const HistoryContext = createContext();


export const HistoryContextProvider = ({ children }) => {

    const { isAuth } = useAuthContext();
    const [state, historyDispatch] = useReducer(historyReducer, initialState);

    //Getting watched (history) from Sever
    useEffect(() => {
        // eslint-disable-next-line no-lone-blocks
        {
          isAuth &&
            (async () => {
              try {
                const {
                  data: { history },
                  status,
                } = await axios.get("/api/user/history", {
                  headers: {
                    authorization: isAuth,
                  },
                });

              
    
                if (status === 200) {
                    historyDispatch({ type: "GET_LIKED_VIDEO", payload: history });
                }
              } catch (error) {
                console.log(error.response);
               
              }
            })();
        }
      }, [isAuth]);

    const addHistoryVideo = async (video) =>{

        try {
            const {
              status,
              data: { history },
            } = await axios.post(
              "/api/user/history",
              { video },
              {
                headers: {
                  authorization: isAuth,
                },
              }
            );
    
            if (status === 201) {
              console.log(history)
              historyDispatch({ type: "HISTORY_SAVED", payload: history });
            }
          } catch (error) {
            toast.error("Error occured in History context", { position: "top-right" });
          }

    }

    const clearHistory = async() => {
      
      if(isAuth){
        try {
          const {
            status,
            data: { history },
          } = await axios.delete(
            "/api/user/history/all",
            {
              headers: {
                authorization: isAuth,
              },
            }
          );

      
          if (status === 200) {
            console.log(history)
            historyDispatch({ type: "CLEAR_HISTORY", payload: history });
          }
        } catch (error) {
            console.log(error)
        }
      }

    }

    return <HistoryContext.Provider value={{state, historyDispatch, addHistoryVideo, clearHistory}}> {children} </HistoryContext.Provider>;
};

export const useHistoryContext = () => useContext(HistoryContext);
