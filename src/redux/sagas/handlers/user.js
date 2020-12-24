import { call, put } from "redux-saga/effects";
import { currentError } from "../../ducks/user";
import {
  signUpUser,
  loginUser,
  logOutUser,
  passwordResetUser,
  emailUpdateUser,
  passwordUpdateUser,
} from "../requests/user";

export function* handleSignUpUser(action) {
  try {
    const response = yield call(signUpUser, action);
    const { data } = response;
    console.log(data);
  } catch (err) {
    yield put(currentError("There was an error to Sign you up"));
  }
}

export function* handleLoginUser(action) {
  try {
    console.log(action);
    const response = yield call(loginUser, action);
    console.log(response);
  } catch (err) {
    yield put(currentError("There was an error Log In"));
  }
}
export function* handleLogOutUser(action) {
  try {
    console.log(action);
    const response = yield call(logOutUser, action);
    console.log(response);
  } catch (err) {
    yield put(currentError("There was an error login out"));
  }
}
export function* handlePasswordResetUser(action) {
  try {
    console.log(action);
    yield call(passwordResetUser, action.email);
  } catch (err) {
    yield put(currentError("There was an error with your password reset"));
  }
}
export function* handleEmailUpdateUser(action) {
  try {
    console.log(action);
    yield call(emailUpdateUser, action.email);
  } catch (err) {
    yield put(currentError("There was an error with your email update"));
  }
}
export function* handlePasswordUpdateUser(action) {
  try {
    console.log(action);
    yield call(passwordUpdateUser, action.password);
  } catch (err) {
    yield put(currentError("There was an error with your password update"));
  }
}
