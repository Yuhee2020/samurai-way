import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PostsPropsType} from "./components/Profile/MyPosts/Post/Post";
import {MessagePropsType} from "./components/Dialogs/Message/Message";
import {DialogsPropsType} from "./components/Dialogs/Dialog/Dialog";

const data = [
    [
        {message: "Hi, how are you?", likesCount: 20},
        {message: "It is my first post", likesCount: 15},
        {message: "Hello, who are you?", likesCount: 30}
    ],
    [
        {name: "Dimas", id: 1},
        {name: "Dasha", id: 2},
        {name: "Vania", id: 3},
        {name: "Valera", id: 4},
        {name: "Irina", id: 5},
    ],
    [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Where are you?"},
        {id: 4, message: "Good bye!"}
    ]
]
export type Data={
    data: [PostsPropsType, MessagePropsType, DialogsPropsType]
}

ReactDOM.render(
    <App data={data}/>,
    document.getElementById('root')
);