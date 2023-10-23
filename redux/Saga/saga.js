import { takeLatest, put, call } from "redux-saga/effects";
import { fetchDataFailure, fetchDataSuccess } from "../Action/action";
import { FETCH_DATA_REQUEST } from "../Action/actionType";

async function fetchDataFromAPI() {
  return fetch("https://lbp8api.enactweb.com/public/apphome").then(
    (response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    }
  );
}

function* fetchDataSaga() {
  try {
    const data = yield call(fetchDataFromAPI);
    console.log("Data", data.data);
    yield put(fetchDataSuccess(data.data));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}

function* watchDataRequests() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
}

export default function* rootSaga() {
  yield watchDataRequests();
  // Add other sagas here if needed
}
