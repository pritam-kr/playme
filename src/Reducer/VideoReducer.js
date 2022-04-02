import { VIDEOS_CATEGORY_NAME,GET_VIDEO, GET_CATEGORY_NAME, FILTER_RESET } from "./Action";

export const videoReducer = (state, action) => {
  switch (action.type) {
    case GET_VIDEO:
      return { ...state, videos: action.payload };

    case GET_CATEGORY_NAME:
      return { ...state, categoryName: action.payload };

    case FILTER_RESET:
      return { ...state, categoryName: "ALL" };

    case VIDEOS_CATEGORY_NAME :
    return {...state, categoryName: action.payload}

    default:
      return state;
  }
};
