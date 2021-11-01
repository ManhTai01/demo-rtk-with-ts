import authSaga from "features/auth/authSaga";
import { all } from "redux-saga/effects";
import counterSaga from "./counterSaga";
export default function* rootSaga() {
  console.log("concac");
  yield all([authSaga(), counterSaga()]);
}
