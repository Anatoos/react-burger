import * as actions from '../actions/profile'
import { profileReducer } from "./profile";

const profileInitialState = {
    user: {},

    loginInfo: false,
    loginInfoSuccess: false,
    loginInfoFailed:false,

    getUserInfo: false,
    getUserInfoSuccess: false,
    getUserInfoFailed:false,

    register: false,
    registerSuccess: false,
    registerFailed: false,

    logoutInfo: false,
    logoutInfoSuccess: false,
    logoutInfoFailed: false,
};

describe('profileReducer', () => {
    it('should return the initial state', () => {
        expect(profileReducer(undefined, {})).toEqual(profileInitialState);
    });

    it('should handle GET_LOGIN_INFO_REQUEST', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.GET_LOGIN_INFO_REQUEST,
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                loginInfo: true,
                loginInfoFailed: false,
                loginInfoSuccess: false
            })
        );
    });

    it('should handle GET_LOGIN_INFO_SUCCESS', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.GET_LOGIN_INFO_SUCCESS,
                data: {
                    email: 'test123321@mail.ru',
                    name: 'test123321',
                    pwd: 'test123321',
                }
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                user: {
                    email: 'test123321@mail.ru',
                    name: 'test123321',
                    pwd: 'test123321',
                },
                loginInfo: false,
                loginInfoFailed: false,
                loginInfoSuccess: true
            })
        );
    });

    it('should handle GET_LOGIN_INFO_FAILED', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.GET_LOGIN_INFO_FAILED,
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                loginInfo: false,
                loginInfoFailed: true,
                loginInfoSuccess: false
            })
        );
    });

    it('should handle GET_LOGOUT_INFO_REQUEST', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.GET_LOGOUT_INFO_REQUEST,
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                logoutInfo: true,
                logoutInfoFailed: false,
                logoutInfoSuccess: false
            })
        );
    });

    it('should handle GET_LOGOUT_INFO_SUCCESS', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.GET_LOGOUT_INFO_SUCCESS,
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                user: {},
                logoutInfo: false,
                logoutInfoFailed: false,
                logoutInfoSuccess: false
            })
        );
    });

    it('should handle GET_LOGOUT_INFO_FAILED', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.GET_LOGOUT_INFO_FAILED,
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                logoutInfo: false,
                logoutInfoFailed: true,
                logoutInfoSuccess: false
            })
        );
    });

    it('should handle GET_REGISTRATION_INFO_REQUEST', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.GET_REGISTRATION_INFO_REQUEST,
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                register: true,
                registerFailed: false,
                registerSuccess: false
            })
        );
    });

    it('should handle GET_REGISTER_INFO_SUCCESS', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.GET_REGISTRATION_INFO_SUCCESS,
                data: {
                    email: 'test123321@mail.ru',
                    name: 'test123321',
                    pwd: 'test123321',
                }
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                user: {
                    email: 'test123321@mail.ru',
                    name: 'test123321',
                    pwd: 'test123321',
                },
                register: false,
                registerFailed: false,
                registerSuccess: true
            })
        );
    });

    it('should handle GET_REGISTER_INFO_FAILED', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.GET_REGISTRATION_INFO_FAILED,
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                register: false,
                registerFailed: true,
                registerSuccess: false
            })
        );
    });

    it('should handle GET_USER_INFO_REQUEST', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.GET_USER_INFO_REQUEST,
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                getUserInfo: true,
                getUserInfoFailed: false,
                getUserInfoSuccess: false
            })
        );
    });

    it('should handle GET_USER_INFO_SUCCESS', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.GET_USER_INFO_SUCCESS,
                data: {
                    email: 'test123321@mail.ru',
                    name: 'test123321',
                    pwd: 'test123321',
                }
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                user: {
                    email: 'test123321@mail.ru',
                    name: 'test123321',
                    pwd: 'test123321',
                },
                getUserInfo: false,
                getUserInfoFailed: false,
                getUserInfoSuccess: true
            })
        );
    });

    it('should handle GET_USER_INFO_FAILED', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.GET_USER_INFO_FAILED,
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                getUserInfo: false,
                getUserInfoFailed: true,
                getUserInfoSuccess: false
            })
        );
    });

    it('should handle CHANGE_USER_INFO_REQUEST', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.CHANGE_USER_INFO_REQUEST,
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                loginInfo: true,
                loginInfoFailed: false,
                loginInfoSuccess: false
            })
        );
    });

    it('should handle CHANGE_USER_INFO_SUCCESS', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.CHANGE_USER_INFO_SUCCESS,
                data: {
                    email: 'test123321@mail.ru',
                    name: 'test123321',
                    pwd: 'test123321',
                }
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                user: {
                    email: 'test123321@mail.ru',
                    name: 'test123321',
                    pwd: 'test123321',
                },
                loginInfo: false,
                loginInfoFailed: false,
                loginInfoSuccess: true
            })
        );
    });

    it('should handle CHANGE_USER_INFO_FAILED', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.CHANGE_USER_INFO_FAILED,
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                loginInfo: false,
                loginInfoFailed: true,
                loginInfoSuccess: false
            })
        );
    });
})