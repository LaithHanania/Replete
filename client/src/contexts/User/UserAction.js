import axios from "axios";

export const setLoading = (dispatch, status) =>
  dispatch({ type: "SET_LOADING", payload: status });

export const setError = (dispatch, error) =>
  dispatch({
    type: "SET_ERROR",
    payload: { error: error.status, message: error.message }
  });

export const getUser = async dispatch => {
  setLoading(dispatch, true);
  const res = await axios.get("/api/current_user");
  dispatch({ type: 'FETCH_USER', payload: res.data });
};
