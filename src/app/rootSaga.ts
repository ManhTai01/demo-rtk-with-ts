import {all} from 'redux-saga/effects'
import counterSaga from './counterSaga';
function* helloSaga() {
    console.log("hello");
    
}

export default function* rootSaga() {
    console.log(
    "concac"
    );
    yield all([helloSaga(), counterSaga()]);
    
}