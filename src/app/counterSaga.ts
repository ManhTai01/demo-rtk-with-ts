import { delay, put, takeEvery } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { incrementSaga, incrementSagaSuccess } from "features/counter/counterSlice";

export function* handleSaga(action: PayloadAction<number>) {
  console.log("waiting 1s");
  yield delay(1000);
  console.log("waiting done");
  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  console.log("Counter");
  yield takeEvery(incrementSaga.toString(), handleSaga);
  // yield takeLatest(incrementSaga.toString(), handleSaga);
}
