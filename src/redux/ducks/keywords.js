export const SET_KEYWORDS_LIST = "GET_KEYWORDS_LIST";
export const SET_CURRENT_KEY = "SET_CURRENT_KEY";
export const ADD_KEYWORD = "ADD_KEYWORD";
export const EDIT_KEY = "EDIT_KEY";
export const SET_ERROR = "SET_ERROR";
export const GET_USER_DATA = "GET_USER_DATA";

const initialList = [];

const currentKeyList = {
  title: "",
  words: [],
};
const currentError = {
  error: "",
};

export const setCurrentList = (list) => ({
  type: SET_KEYWORDS_LIST,
  list,
});

export const setCurrentKey = (title, words) => ({
  type: SET_CURRENT_KEY,
  title,
  words,
});

export const addKey = (data) => ({
  type: ADD_KEYWORD,
  title: data.title,
  words: data.words,
  email: data.email,
});
export const editKey = (data) => ({
  type: EDIT_KEY,
  title: data.title,
  words: data.words,
  email: data.email,
});
export const getUserData = (email) => ({
  type: GET_USER_DATA,
  email,
});
export const setError = (error) => ({
  type: SET_ERROR,
  error,
});

export const keywordsListReducer = (state = initialList, action) => {
  switch (action.type) {
    case SET_KEYWORDS_LIST:
      return action.list;
    default:
      return state;
  }
};
export const keywordsReducer = (state = currentKeyList, action) => {
  switch (action.type) {
    case SET_CURRENT_KEY:
      return { ...state, title: action.title, words: action.words };
    default:
      return state;
  }
};
export const errorReducer = (state = currentError, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
