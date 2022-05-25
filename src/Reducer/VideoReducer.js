 
import { VIDEOS_CATEGORY_NAME,GET_VIDEO, GET_CATEGORY_NAME, FILTER_RESET } from "./Action";

export const videoReducer = (state, action) => {
  switch (action.type) {
    case GET_VIDEO:
      return { ...state, videos: action.payload, loader: action.loader  };

    case GET_CATEGORY_NAME:
      return { ...state, categoryName: action.payload };

    case FILTER_RESET:
      return { ...state, categoryName: "ALL" };

    case VIDEOS_CATEGORY_NAME :
      return {...state, categoryName: action.payload}

    case "ADD_NOTE" : 
    return {...state, videos: state.videos.map((eachVideo) => eachVideo._id === action.payload._id ? action.payload : eachVideo) }

    case "DELETE_NOTE": 
 
    return {...state, videos: state.videos.map((eachVideo) =>  eachVideo._id === action.payload._id? action.payload : eachVideo )}

    case "FETCH_ERROR":
    return {...state, loader: action.loader}

    default:
      return state;
  }
};
