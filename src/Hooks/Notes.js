// I'm making these files later for making destructured code.
import axios from "axios"
import { useVideoContext} from "../Context/Index"
 import {toast} from "react-hot-toast"


export const useNotes =  () => {

    const {dispatch} = useVideoContext()
     const createNotes = async (note, token, videoId) => {

        try{
            const {data: {video}, status} = await axios.post(`/api/video/${videoId}`, {note}, {headers: {authorization: token}})

             if(status === 201){
                dispatch({type: "ADD_NOTE", payload: video})
                toast.success("Notes Added", {position: "top-right"})
             }

        }
        catch(error){
            toast.error("Error happened! Tyr Again", {position: "top-right"})
        }

     }

     return {createNotes }
}