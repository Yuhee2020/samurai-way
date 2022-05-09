import React from 'react';
import './index.css';
import {store} from "./redux/state";
import App from "./App";
import ReactDOM from 'react-dom';


const rerenderTree = () => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}


rerenderTree()

store.subscribe(rerenderTree)