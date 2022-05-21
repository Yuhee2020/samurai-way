import React from 'react';
import './index.css';
import {store} from "./redux/reduxStore";
import App from "./App";
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";


const rerenderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
        <App store={store}/>,
        </BrowserRouter>, document.getElementById('root')
    );
}


rerenderTree()

store.subscribe(rerenderTree)