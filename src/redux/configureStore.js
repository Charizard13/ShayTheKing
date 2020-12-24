import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { UserStatus, errorStatus } from "./ducks/user";
import { snackbarReducer } from "./ducks/snackbar";
import { keywordsListReducer, keywordsReducer } from "./ducks/keywords";
import {
  watcherSagaSignUp,
  watcherSagaLogin,
  watcherSagaLogOutUser,
  watcherSagaPasswordResetUser,
  watcherSagaEmailUpdateUser,
  watcherSagaPasswordUpdateUser,
  watcherSagaAddKey,
  watcherSagaGetUserData,
} from "./sagas/rootSaga";

const reducer = combineReducers({
  user: UserStatus,
  snackbar: snackbarReducer,
  keywordsList: keywordsListReducer,
  keyword: keywordsReducer,
  error: errorStatus,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSagaLogin);
sagaMiddleware.run(watcherSagaSignUp);
sagaMiddleware.run(watcherSagaLogOutUser);
sagaMiddleware.run(watcherSagaPasswordResetUser);
sagaMiddleware.run(watcherSagaEmailUpdateUser);
sagaMiddleware.run(watcherSagaPasswordUpdateUser);
sagaMiddleware.run(watcherSagaAddKey);
sagaMiddleware.run(watcherSagaGetUserData);

export default store;
