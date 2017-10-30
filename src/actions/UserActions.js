import {actionTypes} from "../constants/actionsTypes";
import instance from "../configs/axiosConfigs";

export function registerUser(user) {
  return {
    type: actionTypes.REGISTER_USERA,
    payload: instance.post("auth/register/", user)
  };
}

export function loginUser(loginDetails) {
  return {
    type: actionTypes.LOGIN_USER,
    payload: instance.post("auth/login/", loginDetails)
  };
}

export function noMatch() {
  return {
    type: actionTypes.IF_NOT_MATCH,
    payload: "Password don't match"
  };
}

export function logoutUser() {
  return {
    type: "LOGOUT_USER",
    payload: instance.post("auth/logout")
  };
}