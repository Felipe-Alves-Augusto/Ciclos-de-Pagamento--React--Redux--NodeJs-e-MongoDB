import React from "react";
import ReactDOM from "react-dom";
import App from './main/App';
import { applyMiddleware, createStore } from 'redux';
import {Provider} from 'react-redux';
import reducers from './main/Redurcers';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import multi from 'redux-multi'

const store = createStore(reducers, applyMiddleware(thunk, multi));

ReactDOM.render(
    <Provider store={store}>
        <App></App>,
    </Provider>,
    document.getElementById('app')
)