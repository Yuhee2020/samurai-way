
import {v1} from "uuid";



export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type DialogsType = {
    name: string
    id: string
}
export type MessageType = {
    id: string
    message: string
}
export type FriendsType = {
    id: string
    name: string
}
export type naviBarPageType = {
    friends: Array<FriendsType>
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText:string

}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    messageText: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    naviBarPage: naviBarPageType
}

let rerenderTree=()=>{
}

export const subscribe=(observer:()=>void)=>{
rerenderTree=observer
}

export const addPost = () => {
    let newPost: PostType = {id: v1(), message: state.profilePage.newPostText, likesCount: 0}
    state.profilePage.posts.unshift(newPost)
    state.profilePage.newPostText=""
    rerenderTree()
}

export const updateNewPostText=(newText:string)=>{
    state.profilePage.newPostText=newText
    rerenderTree()
}

export const addMessage=()=>{
    let newMessage: MessageType= {id:v1() , message: state.dialogsPage.messageText }
    state.dialogsPage.messages.unshift(newMessage)
    state.dialogsPage.messageText=""
    rerenderTree()
}
export const updateMessage=(newMessage:string)=> {
    state.dialogsPage.messageText = newMessage
    rerenderTree()
}

export let state:StateType = {
    profilePage: {
        posts: [
            {id: v1(), message: "Hi, how are you?", likesCount: 20},
            {id: v1(), message: "It is my first post", likesCount: 15},
            {id: v1(), message: "Hello, who are you?", likesCount: 30}
        ],
        newPostText: ""
    },
    dialogsPage: {
        dialogs: [
            {name: "Dimas", id: v1()},
            {name: "Dasha", id: v1()},
            {name: "Vania", id: v1()},
            {name: "Valera", id: v1()},
            {name: "Irina", id: v1()},
        ],
        messages: [
            {id: v1(), message: "Hello"},
            {id: v1(), message: "How are you?"},
            {id: v1(), message: "Where are you?"},
            {id: v1(), message: "Good bye!"}
        ],
        messageText: ""
    },
    naviBarPage: {
        friends: [
            {id: v1(), name: "Vasia",},
            {id: v1(), name: "Dasha",},
            {id: v1(), name: "Dima",},

        ],
    },
}
console.log(state.dialogsPage.messages)