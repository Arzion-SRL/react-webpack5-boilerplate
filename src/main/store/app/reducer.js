import { FETCHING, SUCCESS, FAILURE } from '~store/app/types';

const INITIAL_STATE = {
    error: false,
    isLoading: false,
    data: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCHING:
            return {
                ...state,
                loading: true,
            };
        case SUCCESS: {
            return {
                ...state,
                error: false,
                loading: false,
                data: action.payload,
            };
        }
        case FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default: {
            return state;
        }
    }
};
