import React from 'react';
import './index.css';
import {state, subscribe} from "./redux/state";
import {addMessage, addPost, StateType, updateMessage, updateNewPostText} from "./redux/state";
import App from "./App";
import ReactDOM from 'react-dom';


 const rerenderTree=()=>{
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}
             addMessage={addMessage}
             updateMessage={updateMessage}/>,
        document.getElementById('root')
    );}




rerenderTree()

subscribe(rerenderTree)