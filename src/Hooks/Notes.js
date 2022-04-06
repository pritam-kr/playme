// I'm making these files later for making destructured code.
import axios from "axios"
import {useState} from "react"
import {useAuthContext} from "../Context/AuthContext"


export const useNotes = () => {
    const [newNotes, setNewNotes] = useState({
        notes: [],
        loading: false,
        error: ""
    })

    // Authentication 
    const {isAuth} = useAuthContext()
     
     const createNotes = async (note, token) => {

        try{
            const response = await axios.post("api/user/notes", {note}, {headers: {authorization: token}})

            console.log(response)
        }
        catch(error){
            console.log(error)
        }

     }

     return {createNotes}
}