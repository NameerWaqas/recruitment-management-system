import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/authReducer";
import OpeningReducer from "./reducers/newOpening";

export default configureStore({
  reducer: { auth: AuthReducer, newOpening: OpeningReducer },
});
