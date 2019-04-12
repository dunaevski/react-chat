import * as types from "../constants/chats";
import callApi from "../utils/call-api";
import { redirect } from "./services";

export function fetchMyChats() {
  return (dispatch, getState) => {
    const { token } = getState().auth;

    dispatch({
      type: types.FETCH_MY_CHATS_REQUEST
    });

    return callApi("/chats/my", token)
      .then(data =>
        dispatch({
          type: types.FETCH_MY_CHATS_SUCCESS,
          payload: data
        })
      )
      .catch(res =>
        dispatch({
          type: types.FETCH_MY_CHATS_FAILURE,
          payload: res
        })
      );
  };
}

export function fetchAllChats() {
  return (dispatch, getState) => {
    const { token } = getState().auth;

    dispatch({
      type: types.FETCH_ALL_CHATS_REQUEST
    });

    return callApi("/chats", token)
      .then(data =>
        dispatch({
          type: types.FETCH_ALL_CHATS_SUCCESS,
          payload: data
        })
      )
      .catch(res =>
        dispatch({
          type: types.FETCH_ALL_CHATS_FAILURE,
          payload: res
        })
      );
  };
}

export function fetchChat(chatId) {
  return (dispatch, getState) => {
    const { token } = getState().auth;

    dispatch({
      type: types.FETCH_ALL_CHATS_REQUEST
    });

    return callApi(`/chats/${chatId}`, token)
      .then(data => {
        dispatch({
          type: types.FETCH_CHAT_SUCCESS,
          payload: data
        });
        return data;
      })
      .catch(res => {
        dispatch({
          type: types.FETCH_CHAT_FAILURE,
          payload: res
        });
        dispatch(redirect("/chat"));
      });
  };
}

export function setActiveChat(chatId) {
  return dispatch => {
    return dispatch(fetchChat(chatId)).then(data => {
      if (!data) {
        dispatch(redirect("/chat"));

        return dispatch({
          type: types.UNSET_ACTIVE_CHAT
        });
      }
      dispatch({
        type: types.SET_ACTIVE_CHAT,
        payload: data
      });
    });
  };
}