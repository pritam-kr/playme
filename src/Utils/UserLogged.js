import {toast} from "react-hot-toast"

//User Logged message showing 
export const loggedMessage = (foundUser) => {
    const {firstName, lastName} = foundUser
    toast.success (`Welcome ${firstName} ${lastName}`, {position: "top-right"})
}
