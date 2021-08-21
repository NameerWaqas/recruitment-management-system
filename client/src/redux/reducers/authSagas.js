import { takeLatest, call, put } from "@redux-saga/core/effects";
import { getUserLogin, getUserRegister } from "../../fetcher/auth.fetch";
import { attachToken } from "../../fetcher/fetch";
import { updateAuth } from "./authReducer";
import { authLogin, authRegister } from "./sagasActionTypes";

function* LOGIN({ payload }) {
  try {
    const { email, password, push } = payload;
    const data = yield call(getUserLogin, { email, password });
    const { jwt } = data;
    localStorage.setItem("jwt", jwt);
    attachToken(jwt);
    yield put(updateAuth({ user: true, userData: data }));
    push("/dashboard/user");
  } catch (e) {
    console.log("object :>> ", e);
  }
}

function* REGISTER({ payload }) {
  try {
    const { email, password, push, type, username } = payload;
    const data = yield call(getUserRegister, {
      email,
      password,
      type,
      username,
    });
    const { jwt } = data;
    localStorage.setItem("jwt", jwt);
    attachToken(jwt);
    yield put(updateAuth({ user: true, userData: data }));
    push("/dashboard/user");
  } catch (e) {
    console.log("object :>> ", e);
  }
}

export function* watchLogin() {
  yield takeLatest(authLogin, LOGIN);
}

export function* watchRegister() {
  yield takeLatest(authRegister, REGISTER);
}
