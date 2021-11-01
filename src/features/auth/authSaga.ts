import { fork, take } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { authAction, LoginPayload } from "./authSlice";

function* handleLoggin(payload: LoginPayload) {
  console.log(payload);
}
function* handleLoggout() {
  console.log("out ");
}
function* watchLogginFlow() {
  const action: PayloadAction<LoginPayload> = yield take(authAction.login.type);
  yield fork(handleLoggin, action.payload);
  yield take(authAction.logout.type);
  yield fork(handleLoggout);
}

export default function* authSaga() {
  yield fork(watchLogginFlow);
}
