import {v1} from "uuid";

export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type ProfileType =null | {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType
}

let initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: "Hi, how are you?", likesCount: 20},
        {id: v1(), message: "It is my first post", likesCount: 15},
        {id: v1(), message: "Hello, who are you?", likesCount: 30}
    ],
    newPostText: "",
    profile:null
}
export const profileReducer = (state: ProfilePageType = initialState, action: TsarType): ProfilePageType => {
    switch (action.type) {
        case "UPDATE-NEW-POST-TEXT": {
            return {...state, newPostText: action.newText}

        }
        case "ADD-POST": {
            let newPost: PostType = {id: v1(), message: state.newPostText, likesCount: 0}
            return {...state, posts: [newPost, ...state.posts,], newPostText: ""}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

type TsarType = setUserProfileACType | addPostACType | updateNewPostTextACType

export type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}

export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: "ADD-POST"

    } as const
}

export type setUserProfileACType = ReturnType<typeof setUserProfileAC>
export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile

    } as const
}