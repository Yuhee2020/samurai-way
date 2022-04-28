import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {addMessage, addPost, StateType, updateMessage, updateNewPostText} from "./redux/state";

export const rerenderTree=(state:StateType)=>{
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}
             addMessage={addMessage}
             updateMessage={updateMessage}/>,
    document.getElementById('root')
);}

