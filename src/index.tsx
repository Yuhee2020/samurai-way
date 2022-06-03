import React from 'react';
import './index.css';
import {store} from "./redux/reduxStore";
import App from "./App";
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


const rerenderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
        <App store={store}/>,
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}


rerenderTree()

store.subscribe(rerenderTree)