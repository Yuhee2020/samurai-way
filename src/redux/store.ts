import {v1} from "uuid";
import {addPostACType, profileReducer, updateNewPostTextACType} from "./profileReducer";
import {addMessageACType, dialogsReducer, updateMessageACType} from "./dialogsReducer";


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
    newPostText: string

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


export type StoreType = {
    _state: StateType
    // updateMessage: (newMessage: string)=>void
    // addMessage:()=>void
    // updateNewPostText:(newText: string)=>void
    // addPost:()=>void
    rerenderTree:()=>void
    subscribe:(observer: () => void)=>void
    getState:()=>StateType
    dispatch: (action:ActionsTypes)=>void
}

export type ActionsTypes= updateMessageACType | addMessageACType | updateNewPostTextACType | addPostACType


/*


export let store: StoreType = {
    _state: {
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
    },
    rerenderTree(){
    },
    subscribe(observer){
        this.rerenderTree = observer
    },
    getState(){
        return this._state
    },
    dispatch(action){

        this._state.profilePage= profileReducer(this._state.profilePage, action)
        this._state.dialogsPage= dialogsReducer(this._state.dialogsPage, action)

        this.rerenderTree()




    }

}
*/

