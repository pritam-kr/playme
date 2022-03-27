
import {GET_LIKED_VIDEO} from "../Reducer/Action"

export const likesReducer = (state, action) => {
    switch(action.type){
        case GET_LIKED_VIDEO:
        return {...state, likedVideo: [...state.likedVideo, ...action.payload]}
        default:
        return state
    }
};