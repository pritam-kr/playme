import { GET_LIKED_VIDEO, SAVED_LIKED_VIDEO, REMOVE_LIKED_VIDEO } from "../Reducer/Action";

export const likesReducer = (state, action) => {
  switch (action.type) {
    case GET_LIKED_VIDEO:
      return { ...state, likedVideo: action.payload };

    case  SAVED_LIKED_VIDEO:
      return { ...state, likedVideo: action.payload };
    
    case REMOVE_LIKED_VIDEO: 
    return { ...state, likedVideo: action.payload };

    default:
      return state;
  }
};
