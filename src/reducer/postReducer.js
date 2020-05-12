import {
  ADD_POST,
  GET_POSTS,
  GET_POST,
  DELETE_POST,
  POST_LOADING,
} from "../actions/types";

const initialState = {
  memes: [],
  meme: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case POST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_POSTS:
      return {
        ...state,
        memes: action.payload,
        meme: action.payload,
        loading: false,
      };
    /*case GET_POST:
        return {
          ...state,
          post: action.payload,
          loading: false
        };
        */
    case ADD_POST:
      return {
        ...state,
        memes: [action.payload, ...state.memes],
      };

    /*  case DELETE_POST:
        return {
          ...state,
          posts: state.posts.filter(post => post._id !== action.payload)
        };*/
    default:
      return state;
  }
}
