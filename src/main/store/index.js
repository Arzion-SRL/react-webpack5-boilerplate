import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import AppReducer from '~main/store/app/reducer';
import preloadedState from './initialState';

const middlewares = [thunk];

const reducers = combineReducers({ app: AppReducer });

const composeEnhancers = composeWithDevTools({});

const store = createStore(
    reducers,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
