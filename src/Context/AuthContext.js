import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import axios from "axios";
import { regEx, loggedMessage } from "../Utils/Index";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    // getting token and userInfo from local Storage
    const token = localStorage.getItem("login-token") || ""
    const userInfo = JSON.parse(localStorage.getItem("user")) || null

    //State for Forms error
    const [error, setError] = useState("")

    //setting to useState
    const [isAuth, setIsAuth] = useState("");
     
    const [user, setUser] = useState( "");

    useEffect(() => {
        setIsAuth(token);
        setUser(userInfo)
    }, []);

    const navigate = useNavigate();
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

    return (
        <AuthContext.Provider value={{ loginFormHandler, isAuth, user, error, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
