import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

//Register user

export const registerUser = (userData, history) => (dispatch) => {
  const url = "https://agile-anchorage-04188.herokuapp.com/api/users/register";
  axios
    .post(url, userData)
    .then((res) => history.push("/login"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Login - get user token
export const loginUser = (userData) => (dispatch) => {
  const url = "https://agile-anchorage-04188.herokuapp.com/api/users/login";
  axios
    .post(url, userData)
    .then((res) => {
      // Save to local storage
      const { token } = res.data;
      // set token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to auth header
      setAuthToken(token);
      // Dode token
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

//Log out user
export const logoutUser = () => (dispatch) => {
  // Remove from local storage
  localStorage.removeItem("jwtToken");
  // remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} and isAuthenticated = false
  dispatch(setCurrentUser({}));
};
