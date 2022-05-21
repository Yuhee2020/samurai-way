import {v1} from "uuid";
import {ActionsTypes, PostType, ProfilePageType} from "./store";


let initialState={
    posts: [
        {id: v1(), message: "Hi, how are you?", likesCount: 20},
        {id: v1(), message: "It is my first post", likesCount: 15},
        {id: v1(), message: "Hello, who are you?", likesCount: 30}
    ],
    newPostText: ""
}
export const profileReducer=(state: ProfilePageType=initialState, action: ActionsTypes)=>{
    switch (action.type){
        case "UPDATE-NEW-POST-TEXT":{
           state.newPostText = action.newText
            return state

        }
        case "ADD-POST":{
            let newPost: PostType = {id: v1(), message: state.newPostText, likesCount: 0}
            state.posts.unshift(newPost)
            state.newPostText = ""
            return state
        } default: return state
    }
}


export type updateNewPostTextACType=ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC=(newText:string)=>{
    return{
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    }as const
}

export type addPostACType=ReturnType<typeof addPostAC>
export const addPostAC=()=>{
    return{
        type: "ADD-POST"

    }as const
}