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
  const url = "http://agile-anchorage-04188.herokuapp.com/api/memes/all";
  axios
    .get(url)
    .then((res) =>
      dispatch({
        type: GET_POSTS,
        payload: res.data.response,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_POSTS,
        payload: null,
      })
    );
};

// Add Likes
export const addLike = (id) => (dispatch) => {
  const url = `http://agile-anchorage-04188.herokuapp.com/api/addons/like/${id}`;
  axios
    .post(url)
    .then((res) => dispatch(getPosts()))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Remove Likes
export const removeLike = (id) => (dispatch) => {
  const url = `http://agile-anchorage-04188.herokuapp.com/api/addons/unlike/${id}`;
  axios
    .post(url)
    .then((res) => dispatch(getPosts()))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Add Comment
export const addComment = (id, commentData) => (dispatch) => {
  const url = `http://agile-anchorage-04188.herokuapp.com/api/addons/comment/${id}`;
  axios
    .post(url, commentData)
    .then((res) =>
      dispatch({
        type: GET_POSTS,
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

// Delete Comment
// export const deleteComment = (id, commentId) => (dispatch) => {
//   const url = `http://agile-anchorage-04188.herokuapp.com/api/addons/comment/${id}`;
//   axios
//     .delete(url)
//     .then((res) =>
//       dispatch({
//         type: GET_POSTS,
//         payload: res.data,
//       })
//     )
//     .catch((err) =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data,
//       })
//     );
// };

export const setPostLoading = () => {
  return {
    type: POST_LOADING,
  };
};
