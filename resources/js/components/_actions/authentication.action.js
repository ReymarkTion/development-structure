import { authTypes } from '../_types';

export const authActions = {
    logout,
    login,
};

function logout() {
    return dispatch => {
        console.log("--logout --");
    };
}

function login() {
    // ajax or axios request heres
    return dispatch => {

    };

    const request = (response) => ({ type: authTypes.LOGIN_REQUEST, payload: { response } });
    const success = (response) => ({ type: authTypes.LOGIN_SUCCESS, payload: { response } });
    const failure = (error) => ({ type: authTypes.LOGIN_FAILURE, payload: { response } });
};
