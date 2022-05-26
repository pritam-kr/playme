// I'm making these files later for making destructured code.
import axios from "axios"
import { useVideoContext, useAuthContext } from "../Context/Index"
import {toast} from "react-hot-toast"


export const useNotes =  () => {

    const {isAuth} = useAuthContext()
    const {dispatch} = useVideoContext()
     const createNotes = async (note, token, videoId) => {
 
        if(note.title === "" || note.noteBody === ""){
        toast.error("Input field can not be empty.", {position: "top-right"})
        }else{
            try{
                const {data: {video}, status} = await axios.post(`/api/video/${videoId}`, {note}, {headers: {authorization: token}})
                 if(status === 201){
                    dispatch({type: "ADD_NOTE", payload: video})
                    toast.success("Notes Added", {position: "top-right"})
                 }
    
            }
            catch(error){
                const {
                    data: { errors },
                  } = error.response;
                  toast.error(...errors , { position: "top-right" });
            }
        }

     }

     const deleteNote = async (noteId, videoId) => {
        
        try{
            
            const {data, status} = await axios.delete(`/api/video/${videoId}/${noteId}`, {headers: {authorization: isAuth}})
   
            if(status === 200){
                toast.success("Note deleted", {position: "top-right"})
                dispatch({type: "DELETE_NOTE", payload: data.video})
            }          

        }catch(error){
            const {
                data: { errors },
              } = error.response;
              toast.error(...errors , { position: "top-right" });
        }
        
     }

     return {createNotes, deleteNote }
}