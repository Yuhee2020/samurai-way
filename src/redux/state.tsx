import React from "react";


export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    name: string
    id: number
}

export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostType>
}
export type MessagesPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 20},
            {id: 2, message: "It is my first post", likesCount: 15},
            {id: 3, message: "Hello, who are you?", likesCount: 30}
        ],
    },
    messagesPage: {
        dialogs: [
            {name: "Dimas", id: 1},
            {name: "Dasha", id: 2},
            {name: "Vania", id: 3},
            {name: "Valera", id: 4},
            {name: "Irina", id: 5},
        ],
        messages: [
            {id: 1, message: "Hello"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Where are you?"},
            {id: 4, message: "Good bye!"}
        ]
    }
}