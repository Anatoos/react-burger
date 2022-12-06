import { TUser } from "../../types/User";

export const GET_LOGIN_INFO_REQUEST: 'GET_LOGIN_INFO_REQUEST' = 'GET_LOGIN_INFO_REQUEST'
export const GET_LOGIN_INFO_SUCCESS: 'GET_LOGIN_INFO_SUCCESS' = 'GET_LOGIN_INFO_SUCCESS'
export const GET_LOGIN_INFO_FAILED: 'GET_LOGIN_INFO_FAILED' = 'GET_LOGIN_INFO_FAILED'

export const GET_REGISTRATION_INFO_REQUEST: 'GET_REGISTRATION_INFO_REQUEST' = 'GET_REGISTRATION_INFO_REQUEST'
export const GET_REGISTRATION_INFO_SUCCESS: 'GET_REGISTRATION_INFO_SUCCESS' = 'GET_REGISTRATION_INFO_SUCCESS'
export const GET_REGISTRATION_INFO_FAILED: 'GET_REGISTRATION_INFO_FAILED' = 'GET_REGISTRATION_INFO_FAILED'

export const GET_LOGOUT_INFO_REQUEST: 'GET_LOGOUT_INFO_REQUEST' = 'GET_LOGOUT_INFO_REQUEST'
export const GET_LOGOUT_INFO_SUCCESS: 'GET_LOGOUT_INFO_SUCCESS' = 'GET_LOGOUT_INFO_SUCCESS'
export const GET_LOGOUT_INFO_FAILED: 'GET_LOGOUT_INFO_FAILED' = 'GET_LOGOUT_INFO_FAILED'

export const GET_USER_INFO_REQUEST: 'GET_USER_INFO_REQUEST' = 'GET_USER_INFO_REQUEST'
export const GET_USER_INFO_SUCCESS: 'GET_USER_INFO_SUCCESS' = 'GET_USER_INFO_SUCCESS'
export const GET_USER_INFO_FAILED: 'GET_USER_INFO_FAILED' = 'GET_USER_INFO_FAILED'

export const CHANGE_USER_INFO_REQUEST: 'CHANGE_USER_INFO_REQUEST' = 'CHANGE_USER_INFO_REQUEST'
export const CHANGE_USER_INFO_SUCCESS: 'CHANGE_USER_INFO_SUCCESS' = 'CHANGE_USER_INFO_SUCCESS'
export const CHANGE_USER_INFO_FAILED: 'CHANGE_USER_INFO_FAILED' = 'CHANGE_USER_INFO_FAILED'

export type TGetLoginInfoRequestAction = {
    readonly type: typeof GET_LOGIN_INFO_REQUEST
}
export type TGetLoginInfoSuccessAction = {
    readonly type: typeof GET_LOGIN_INFO_SUCCESS,
    readonly data: TUser
}
export type TGetLoginInfoFailedAction = {
    readonly type: typeof GET_LOGIN_INFO_FAILED
}
export type TGetRegistrationInfoRequestAction = {
    readonly type: typeof GET_REGISTRATION_INFO_REQUEST
}
export type TGetRegistrationInfoSuccessAction = {
    readonly type: typeof GET_REGISTRATION_INFO_SUCCESS,
    readonly data: TUser
}
export type TGetRegistrationInfoFailedAction = {
    readonly type: typeof GET_REGISTRATION_INFO_FAILED
}
export type TGetLogoutInfoRequestAction = {
    readonly type: typeof GET_LOGOUT_INFO_REQUEST
}
export type TGetLogoutInfoSuccessAction = {
    readonly type: typeof GET_LOGOUT_INFO_SUCCESS
}
export type TGetLogoutInfoFailedAction = {
    readonly type: typeof GET_LOGOUT_INFO_FAILED
}
export type TGetUserInfoRequestAction = {
    readonly type: typeof GET_USER_INFO_REQUEST
}
export type TGetUserInfoSuccessAction = {
    readonly type: typeof GET_USER_INFO_SUCCESS,
    readonly data: TUser
}
export type TGetUserInfoFailedAction = {
    readonly type: typeof GET_USER_INFO_FAILED
}
export type TChangeUserInfoRequestAction = {
    readonly type: typeof CHANGE_USER_INFO_REQUEST
}
export type TChangeUserInfoSuccessAction = {
    readonly type: typeof CHANGE_USER_INFO_SUCCESS,
    readonly data: TUser
}
export type TChangeUserInfoFailedAction = {
    readonly type: typeof CHANGE_USER_INFO_FAILED
}

export type TProfileActions =
    TGetLoginInfoRequestAction
    | TGetLoginInfoSuccessAction
    | TGetLoginInfoFailedAction
    | TGetRegistrationInfoRequestAction
    | TGetRegistrationInfoSuccessAction
    | TGetRegistrationInfoFailedAction
    | TGetLogoutInfoRequestAction
    | TGetLogoutInfoSuccessAction
    | TGetLogoutInfoFailedAction
    | TGetUserInfoRequestAction
    | TGetUserInfoSuccessAction
    | TGetUserInfoFailedAction
    | TChangeUserInfoRequestAction
    | TChangeUserInfoSuccessAction
    | TChangeUserInfoFailedAction