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
    getSate:()=>StateType
    dispatch: (action:ActionsTypes)=>void
}

export type ActionsTypes= updateMessageACType | addMessageACType | updateNewPostTextACType | addPostACType




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
    // updateMessage(newMessage: string){
    //     this._state.dialogsPage.messageText = newMessage
    //     this.rerenderTree()
    // },
    // addMessage(){
    //     let newMessage: MessageType = {id: v1(), message: this._state.dialogsPage.messageText}
    //     this._state.dialogsPage.messages.unshift(newMessage)
    //     this._state.dialogsPage.messageText = ""
    //     this.rerenderTree()
    // },
    // updateNewPostText(newText: string){
    //     this._state.profilePage.newPostText = newText
    //     this.rerenderTree()
    // },
    // addPost(){
    //     let newPost: PostType = {id: v1(), message: this._state.profilePage.newPostText, likesCount: 0}
    //     this._state.profilePage.posts.unshift(newPost)
    //     this._state.profilePage.newPostText = ""
    //     this.rerenderTree()
    // },
    rerenderTree(){
    },
    subscribe(observer){
        this.rerenderTree = observer
    },
    getSate(){
        return this._state
    },
    dispatch(action){
        if (action.type==="UPDATE-MESSAGE"){
            this._state.dialogsPage.messageText =action.newMessage
            this.rerenderTree()
        }
        if (action.type==="ADD-MESSAGE"){
            let newMessage: MessageType = {id: v1(), message: this._state.dialogsPage.messageText}
            this._state.dialogsPage.messages.unshift(newMessage)
            this._state.dialogsPage.messageText = ""
            this.rerenderTree()
        }
        if(action.type==="UPDATE-NEW-POST-TEXT"){
            this._state.profilePage.newPostText = action.newText
            this.rerenderTree()
        }
        if (action.type==="ADD-POST"){
            let newPost: PostType = {id: v1(), message: this._state.profilePage.newPostText, likesCount: 0}
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.newPostText = ""
            this.rerenderTree()
        }
    }

}

type updateMessageACType=ReturnType<typeof updateMessageAC>
export const updateMessageAC=(newMessage:string)=>{
    return{
        type: "UPDATE-MESSAGE",
        newMessage: newMessage
    }as const
}

type addMessageACType=ReturnType<typeof addMessageAC>
export const addMessageAC=()=>{
    return{
        type: "ADD-MESSAGE"

    }as const
}

type updateNewPostTextACType=ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC=(newText:string)=>{
    return{
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    }as const
}

type addPostACType=ReturnType<typeof addPostAC>
export const addPostAC=()=>{
    return{
        type: "ADD-POST"

    }as const
}