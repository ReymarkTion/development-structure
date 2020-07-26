import { authTypes } from '../_types';

const initialState = {
    permissions: [],
};

export const authentication = (state = initialState, action) => {
    switch (action.type) {
        case authTypes.LOGIN_REQUEST:
            return {
                ...state
            };
        case authTypes.LOGIN_SUCCESS:
            return {
                ...state
            };
        case authTypes.LOGIN_FAILURE:
            return {
                ...state
            };
        default:
            return state;
    }
}