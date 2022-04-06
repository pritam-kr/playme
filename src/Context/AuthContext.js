import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import axios from "axios";
import { regEx, loggedMessage } from "../Utils/Index";
import { useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast"


const AuthContext = createContext();

 
export const AuthContextProvider = ({ children }) => {

    // getting token and userInfo from local Storage
    const token = localStorage.getItem("login-token") || ""
    const userInfo = JSON.parse(localStorage.getItem("user")) || null

    //State for Forms error
    const [error, setError] = useState("")

    //setting to useState
    const [isAuth, setIsAuth] = useState(token);
     
    const [user, setUser] = useState(userInfo);

    
    const navigate = useNavigate();


    //Logout Handler
    const logoutHandler = () => {
        if (isAuth) {
          setIsAuth("")
          
          localStorage.removeItem("login-token")
          localStorage.removeItem("user")
          toast.success("User Logout!!", { position: "top-right" })
        } else {
          navigate("/login")
        }
      }

    // Login form Handlers
    const loginFormHandler = async (formData) => {
        if (regEx.test(formData.email)) {
            try {
                const {
                    status,
                    data: { foundUser, encodedToken },
                } = await axios.post("/api/auth/login", formData);


                if (status === 200) {
                    navigate("/explore");
                    localStorage.setItem("login-token", encodedToken);
                    localStorage.setItem("user", JSON.stringify(foundUser));

                    setIsAuth(encodedToken)
                    setUser(foundUser)

                    //User Logged message showing 
                    loggedMessage(foundUser)
                }
            } catch (error) {
                const {
                    data: { errors },
                } = error.response;
                setError(errors)
            }
        } else if (!regEx.test(formData.email)) {
            setError("Email is not valid. Try Again")
        } else {
            setError("")
        }
    };

    //Signup Form handler
    const signupFormHandler = async (formData) => {
        const signupUser = formData
        try{

            const { data : {encodedToken} } = await axios.post("/api/auth/signup", signupUser);
            if (encodedToken) {
                toast.success("Your account is created.", {position: "top-right"})
                navigate("/login");
                localStorage.setItem('Signup-Token', encodedToken)
            }
        }
        catch (error) {
            const {data : {errors}} = error.response
            toast.error(...errors, {position: "top-right"})
        }
     

    }

    return (
        <AuthContext.Provider value={{ loginFormHandler, isAuth, user, error, setIsAuth, logoutHandler, signupFormHandler }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
