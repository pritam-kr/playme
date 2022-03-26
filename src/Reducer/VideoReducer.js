import { GET_VIDEO, GET_CATEGORY_NAME, FILTER_RESET } from "./Action";

export const videoReducer = (state, action) => {
  switch (action.type) {
    case GET_VIDEO:
      return { ...state, videos: action.payload };

    case GET_CATEGORY_NAME:
      if (state.categoryName.includes(action.payload)) {
        return {
          ...state,
          categoryName: [...state.categoryName].filter(
            (eachCategory) => eachCategory !== action.payload
          ),
        };
      }

      return {
        ...state,
        categoryName: [...state.categoryName, action.payload],
      };

    case FILTER_RESET:

    return {...state, categoryName: []}
    

    default:
      return state;
  }
};
