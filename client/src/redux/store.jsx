import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import AuthReducer from "./reducers/authReducer";
import OpeningReducer from "./reducers/newOpening";
import { watchLogin, watchRegister } from "./reducers/authSagas";

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
  sagaMiddleware,
];

const store = configureStore({
  reducer: { auth: AuthReducer, newOpening: OpeningReducer },
  middleware,
});

sagaMiddleware.run(watchLogin);
sagaMiddleware.run(watchRegister);

export default store;
