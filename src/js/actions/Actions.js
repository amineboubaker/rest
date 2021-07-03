import {
  ADD_USER,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  DELETE_USER,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  GET_USER,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
} from "../const/ActionTypes";
import axios from "axios";

export const getUser = () => async (dispatch) => {
  dispatch({
    type: GET_USER,
  });
  try {
    const { data } = await axios.get("/users/get");
    dispatch({
      type: GET_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_FAIL,
    });
  }
};

export const addUser = (formData) => async (dispatch) => {
  dispatch({
    type: ADD_USER,
  });
  try {
    const { data } = await axios.post("/users/post", formData);
    dispatch({
      type: ADD_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_USER_FAIL,
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_USER,
  });
  try {
    const { data } = await axios.delete(`/users/delete/${id}`);
    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
    });
  }
};
export const updateUser = (id, formData) => async (dispatch) => {
  dispatch({
    type: UPDATE_USER,
  });
  try {
    const { data } = await axios.put(`/users/put/${id}`, formData);
    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
    });
  }
};
