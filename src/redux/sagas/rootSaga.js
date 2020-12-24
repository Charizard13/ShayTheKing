import { takeEvery, takeLatest } from "redux-saga/effects";
import {
  handleSignUpUser,
  handleLoginUser,
  handleLogOutUser,
  handlePasswordResetUser,
  handleEmailUpdateUser,
  handlePasswordUpdateUser,
} from "./handlers/user";
import {
  SIGN_UP_USER,
  LOGIN_USER,
  LOG_OUT_USER,
  PASSWORD_RESET_USER,
  UPDATE_EMAIL_USER,
  UPDATE_PASSWORD_USER,
} from "../ducks/user";

import { ADD_KEYWORD, GET_USER_DATA } from "../ducks/keywords";
import { handleAddKey, handleGetUserData } from "./handlers/list";

export function* watcherSagaSignUp() {
  yield takeLatest(SIGN_UP_USER, handleSignUpUser);
}
export function* watcherSagaLogin() {
  yield takeLatest(LOGIN_USER, handleLoginUser);
}

export function* watcherSagaLogOutUser() {
  yield takeLatest(LOG_OUT_USER, handleLogOutUser);
}

export function* watcherSagaPasswordResetUser() {
  yield takeLatest(PASSWORD_RESET_USER, handlePasswordResetUser);
}

export function* watcherSagaEmailUpdateUser() {
  yield takeLatest(UPDATE_EMAIL_USER, handleEmailUpdateUser);
}

export function* watcherSagaPasswordUpdateUser() {
  yield takeLatest(UPDATE_PASSWORD_USER, handlePasswordUpdateUser);
}

export function* watcherSagaGetUserData() {
  yield takeLatest(GET_USER_DATA, handleGetUserData);
}
export function* watcherSagaAddKey() {
  yield takeEvery(ADD_KEYWORD, handleAddKey);
}
