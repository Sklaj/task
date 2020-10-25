import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from 'react-redux';
import "./index.scss";
import {App} from "./App";
import * as serviceWorker from "./serviceWorker";
import { mainReducer } from "./mainReducer";
import {BrowserRouter as Router} from "react-router-dom";

const store = createStore(mainReducer);

const Application = () => (
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
);

ReactDOM.render(<Application />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
