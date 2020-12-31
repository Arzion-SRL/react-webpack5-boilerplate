import { FETCHING, SUCCESS, FAILURE } from '~store/app/types';

import getUsers from '~main/services/reqres';

const getTodos = () => (dispatch) => {
    dispatch({ type: FETCHING });
    return getUsers()
        .then((res) => {
            dispatch({ type: SUCCESS, payload: res.data });
        })
        .catch(() => {
            dispatch({ type: FAILURE });
        });
};

export default getTodos;
