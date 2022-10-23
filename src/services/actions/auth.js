import { checkResponse } from "../../functions/checkResponse";
import { API } from "../../data/data";
import {
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_FAILED,
    GET_USER_INFO_SUCCESS,
    CHANGE_USER_INFO_REQUEST,
    CHANGE_USER_INFO_FAILED,
    CHANGE_USER_INFO_SUCCESS,
    GET_LOGIN_INFO_REQUEST,
    GET_LOGIN_INFO_FAILED,
    GET_LOGIN_INFO_SUCCESS,
    GET_LOGOUT_INFO_REQUEST,
    GET_LOGOUT_INFO_FAILED,
    GET_LOGOUT_INFO_SUCCESS,
    GET_REGISTRATION_INFO_REQUEST,
    GET_REGISTRATION_INFO_FAILED,
    GET_REGISTRATION_INFO_SUCCESS
} from "./profile";
import {setCookie, getCookie, deleteCookie} from "../../functions/cookie";

const makeRequest = async (data, path) => {
    return await fetch(API + path, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })
}

const makeAuthRequest = async (data = {}, path, type = 'POST') => {
    return await fetch(API + path, {
        method: type,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getCookie('token')
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })
}

const makeGETAuthRequest = async (path) => {
    return await fetch(API + path, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getCookie('token')
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    })
}

const makeAuthToken = (data) => {
    let authToken = data.accessToken;
    let result ={};

    if (authToken.indexOf('Bearer') === 0) {
        authToken = authToken.split('Bearer ')[1];
    }

    if (authToken) {
        setCookie('token', authToken, { expires: 15 * 60 });
    }
    return result;
}

export const logIn = (data) => {
    return async function (dispatch) {
        dispatch({
            type: GET_LOGIN_INFO_REQUEST
        })
        await makeRequest(data, 'auth/login')
            .then(checkResponse)
            .then(res => {
                makeAuthToken(res);
                localStorage.setItem('refreshToken',res.refreshToken);
                dispatch({
                    type: GET_LOGIN_INFO_SUCCESS,
                    data: res
                })
            })
            .catch( e => {
                e ? alert(e) : alert("Произошла ошибка");
                dispatch({
                    type: GET_LOGIN_INFO_FAILED
                })
            } )
    }
};

export const registerNewUser = (data) => {
    return async function (dispatch) {
        dispatch({
            type: GET_REGISTRATION_INFO_REQUEST
        })
        await makeRequest(data, 'auth/register')
            .then(checkResponse)
            .then(res => {
                makeAuthToken(res);
                makeAuthToken(res);
                localStorage.setItem('refreshToken',res.refreshToken);
                dispatch({
                    type: GET_REGISTRATION_INFO_SUCCESS,
                    data: res.user
                });
            })
            .catch( e => {
                e ? alert(e) : alert("Произошла ошибка");
                dispatch({
                    type: GET_REGISTRATION_INFO_FAILED
                })
            } )
    }
}

export const logOut = () => {
    return async function (dispatch) {
        dispatch({
            type: GET_LOGOUT_INFO_REQUEST
        })
        await makeAuthRequest( { token: localStorage.getItem('refreshToken') }, 'auth/logout')
            .then(checkResponse)
            .then(() => {
                deleteCookie('token')
                dispatch({
                    type: GET_LOGOUT_INFO_SUCCESS
                });
                localStorage.clear()
            })
            .catch(e => {
                e ? alert(e) : alert("Произошла ошибка");
                dispatch({
                    type: GET_LOGOUT_INFO_FAILED
                })
            })
    }
}

export const refreshToken = async () => {
    await makeRequest({ token: localStorage.getItem('refreshToken') }, 'auth/token')
        .then(checkResponse)
        .then(res => {
            makeAuthToken(res);
            localStorage.setItem('refreshToken',res.refreshToken)
        })
        .catch(e => {
            e ? console.log(e) : console.log("Произошла ошибка")
        })
}

export const getUserInfo = () => {
    return async function (dispatch) {
        dispatch({
            type: GET_USER_INFO_REQUEST
        })
        await makeGETAuthRequest( 'auth/user')
            .then(checkResponse)
            .then(res => {
                dispatch({
                    type: GET_USER_INFO_SUCCESS,
                    data: res
                })
            })
            .catch( e => {
                e ? alert(e) : alert("Не удалось получить данные пользователя");
                dispatch({
                    type: GET_USER_INFO_FAILED
                })
            } )
    }
}

export const changeUserInfo = (data) => {
    return async function (dispatch) {
        dispatch({
            type: CHANGE_USER_INFO_REQUEST
        })
        await makeAuthRequest(data, 'auth/user', 'PATCH')
            .then(checkResponse)
            .then(res => {
                dispatch({
                    type: CHANGE_USER_INFO_SUCCESS,
                    data: res
                })
            })
            .catch( e => {
                e ? alert(e) : alert("Произошла ошибка");
                console.log(e);
                dispatch({
                    type: CHANGE_USER_INFO_FAILED
                })
            } )
    }
}
