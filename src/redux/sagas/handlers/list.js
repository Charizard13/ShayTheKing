import { call, put } from "redux-saga/effects";
import { setCurrentList } from "../../ducks/keywords";

import { addList, getUserData } from "../requests/list";

export function* handleAddKey(action) {
  try {
    const addResponse = yield call(addList, action);
    const { data } = addResponse;
    const updatedResponse = yield call(getUserData, action);
    const { updatedData } = updatedResponse;
    yield put(setCurrentList(updatedData));
    console.log("new data has been added successfully");
  } catch (err) {
    yield "you got an error";
  }
}
export function* handleGetUserData(action) {
  try {
    const response = yield call(getUserData, action);
    const { data } = response;
    yield put(setCurrentList(data));
  } catch (err) {
    yield "Something went wrong";
  }
}
