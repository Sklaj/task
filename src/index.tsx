import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from 'react-redux';
import {App} from "./App";
import { mainReducer } from "./mainReducer";

const store = createStore(mainReducer);

const Application = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(<Application />, document.getElementById('root'));
