import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';

import { todos, isLoading } from './todos/reducers';

const reducers = {
    todos,
    isLoading
};

const rootReducer = combineReducers(reducers) ;

export const configureStore = () =>
    createStore(
        rootReducer,
         composeWithDevTools(
            applyMiddleware(thunk)
         )
    );