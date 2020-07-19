import { userTypes } from '../_types';

const initialState = {
    permissions: [],
};

export const users = (state = initialState, action) => {
    switch (action.type) {
        case userTypes.LOGIN_REQUEST:
            return {
                ...state
            };
        case userTypes.LOGIN_SUCCESS:
            return {
                ...state
            };
        case userTypes.LOGIN_FAILURE:
            return {
                ...state
            };
        default:
            return state;
    }
}