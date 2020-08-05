import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import rootReducer from './_reducers';
import  App  from './App';


const initialState = {};
// const middleware = [thunk];
// const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
    // initialState,
    // compose(
    //     applyMiddleware(...middleware),
        // loggerMiddleware,
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // )
);



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));