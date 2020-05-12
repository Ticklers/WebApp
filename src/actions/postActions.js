import axios from "axios";

import { ADD_POST, GET_ERRORS, GET_POSTS, POST_LOADING } from "./types";

export const addPost = (postData) => (dispatch) => {
  const url = "https://agile-anchorage-04188.herokuapp.com/api/memes/post";
  axios
    .post(url, postData)
    .then((res) =>
      dispatch({
        type: ADD_POST,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
export const getPosts = () => (dispatch) => {
  dispatch(setPostLoading());
  const url = "http://agile-anchorage-04188.herokuapp.com/api/memes/all";
  axios
    .get(url)
    .then((res) =>
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_POSTS,
        payload: null,
      })
    );
};
export const setPostLoading = () => {
  return {
    type: POST_LOADING,
  };
};