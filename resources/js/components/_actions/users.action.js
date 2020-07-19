import { userTypes } from '../_types';

export const userActions = {
    login,
};

const login = (data) => dispatch => {

    // ajax or axios request here


    const request = (response) => ({ type: userTypes.LOGIN_REQUEST, payload: { response } });
    const success = (response) => ({ type: userTypes.LOGIN_SUCCESS, payload: { response } });
    const failure = (error) => ({ type: userTypes.LOGIN_FAILURE, payload: { response } });
}