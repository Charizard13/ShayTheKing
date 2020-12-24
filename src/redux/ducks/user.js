export const SIGN_UP_USER = "SIGN_UP_USER";
export const SET_USER = "SET_USER";
export const LOGIN_USER = "LOGIN_USER";
export const CURRENT_USER = "CURRENT_USER";
export const LOG_OUT_USER = "LOG_OUT_USER";
export const PASSWORD_RESET_USER = "PASSWORD_RESET_USER";
export const UPDATE_EMAIL_USER = "UPDATE_EMAIL_USER";
export const UPDATE_PASSWORD_USER = "UPDATE_PASSWORD_USER";
export const CURRENT_ERROR = "CURRENT_ERROR";

export const signUp = (email, password) => ({
  type: SIGN_UP_USER,
  email,
  password,
});

export const login = (email, password) => ({
  type: LOGIN_USER,
  email,
  password,
});

export const logOut = () => ({
  type: LOG_OUT_USER,
});

export const passwordReset = (email) => ({
  type: PASSWORD_RESET_USER,
  email,
});
export const updateEmail = (email) => ({
  type: UPDATE_EMAIL_USER,
  email,
});
export const updatePassword = (password) => ({
  type: UPDATE_PASSWORD_USER,
  password,
});

export const currentUser = (email) => ({
  type: CURRENT_USER,
  currentUser: email,
});

export const currentError = (err) => ({
  type: CURRENT_ERROR,
  err,
});

const initialStateUser = {
  email: false,
};
const initialStateError = {
  email: false,
};

export const UserStatus = (state = initialStateUser, action) => {
  switch (action.type) {
    case CURRENT_USER:
      return { ...state, email: action.currentUser };
    default:
      return state;
  }
};
export const errorStatus = (state = initialStateError, action) => {
  switch (action.type) {
    case CURRENT_ERROR:
      return { ...state, err: action.err };
    default:
      return state;
  }
};
