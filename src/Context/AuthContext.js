import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import {regEx} from "../Utils/Index"
import {useNavigate} from "react-router-dom"

const AuthContext = createContext();

 export const AuthContextProvider = ({ children }) => {

    const navigate = useNavigate()
    // Login form Handlers
    const loginFormHandler = async (formData) => {
        if(regEx.test(formData.email)){

            try{
                const {
                    status,
                    data: { foundUser, encodedToken },
                } = await axios.post("/api/auth/login", formData);

                console.log(status, encodedToken, foundUser)

                if(status===200){
                    navigate("/explore")
                }

            }catch(error){
                const {data : {errors}} = error.response
                 console.log(errors)
            }

        }else if (!regEx.test(formData.email)) {
             
        } else {
             
        }
        
    }

     return(
         <AuthContext.Provider value={{loginFormHandler}}>
             {children}
         </AuthContext.Provider>
     )
 }

export const useAuthContext = () => useContext(AuthContext);    