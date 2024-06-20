
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers/index.js";
import {thunk} from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas/index.js';

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            shouldHotReload: false,
        })
        : compose;

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    const middleware = [thunk, sagaMiddleware];
    const enhancers = [applyMiddleware(...middleware)];

    const store = createStore(
        rootReducer, composeEnhancers(...enhancers));
    sagaMiddleware.run(rootSaga); //theo dõi các action Redux- saga

    return store;
};

export default configureStore;
