import {rerenderTree} from "../render";


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
export type FriendsType = {
    id: number
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
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    naviBarPage: naviBarPageType
}


export const addPost = () => {
    let newPost: PostType = {id: 4, message: state.profilePage.newPostText, likesCount: 0}
    state.profilePage.posts.unshift(newPost)
    state.profilePage.newPostText=""
    rerenderTree(state)
}

export const updateNewPostText=(newText:string)=>{
    state.profilePage.newPostText=newText
    rerenderTree(state)
}

export let state:StateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 20},
            {id: 2, message: "It is my first post", likesCount: 15},
            {id: 3, message: "Hello, who are you?", likesCount: 30}
        ],
        newPostText: "Hello mutherfucker"
    },
    dialogsPage: {
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
    },
    naviBarPage: {
        friends: [
            {id: 1, name: "Vasia",},
            {id: 2, name: "Dasha",},
            {id: 3, name: "Dima",},

        ],
    },
}
console.log(state)