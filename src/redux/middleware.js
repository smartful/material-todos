import { ADD_TODO } from "./actions";
import { takeEvery } from "redux-saga/effects";

export function* addTodo() {
  yield takeEvery(ADD_TODO, function* () {
    // Async func here
  });
}

export default function* () {
  yield* addTodo();
}
