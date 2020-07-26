import { authTypes } from '../_types';

export const authActions = {
    login,
};

const login = (data) => dispatch => {

    // ajax or axios request heres


    const request = (response) => ({ type: authTypes.LOGIN_REQUEST, payload: { response } });
    const success = (response) => ({ type: authTypes.LOGIN_SUCCESS, payload: { response } });
    const failure = (error) => ({ type: authTypes.LOGIN_FAILURE, payload: { response } });
}