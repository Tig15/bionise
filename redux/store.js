import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./Reducer/rootReducer";
import rootSaga from "./Saga/saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddle) =>
    defaultMiddle({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middleware),
});

sagaMiddleware.run(rootSaga);

export default store;
