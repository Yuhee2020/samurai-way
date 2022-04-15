import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./redux/state";


const posts = [
    {message: "Hi, how are you?", likesCount: 20},
    {message: "It is my first post", likesCount: 15},
    {message: "Hello, who are you?", likesCount: 30}
]
const dialogs = [
    {name: "Dimas", id: 1},
    {name: "Dasha", id: 2},
    {name: "Vania", id: 3},
    {name: "Valera", id: 4},
    {name: "Irina", id: 5},
]
const messages = [
    {id: 1, message: "Hello"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Where are you?"},
    {id: 4, message: "Good bye!"}
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
    document.getElementById('root')
);