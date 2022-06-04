import {v1} from "uuid";
import {ActionsTypes, PostType, ProfilePageType} from "./store";

 export type UserType={
    id:string
    followed:boolean
    photo:string
    name:string
    status:string
    location:{
        city:string
        country:string
    }
}

export type UsersPageType={
     users:UserType[]
}

let initialState={
    users: [
        {id: v1(), followed:true, photo:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/streams/2012/September/120920/1B3916437-oom-110518-depp-10a.jpg",
            name: "Andrew", status: "OOo tonight, you kill me with your smile", location:{city: "Brest", country:"Belarus"}},
        {id: v1(), followed:false, photo:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/streams/2012/September/120920/1B3916437-oom-110518-depp-10a.jpg",
            name: "Baton", status: "So beautiful an wild", location:{city: "Kobrin", country:"Belarus"}},
        {id: v1(), followed:true,photo:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/streams/2012/September/120920/1B3916437-oom-110518-depp-10a.jpg",
            name: "Dima", status: "I am konik", location:{city: "Vilnia", country:"Litva"}},

    ],
}
export const usersReducer=(state: UsersPageType=initialState, action: FollowACType | UnFollowACType):UsersPageType=>{
    switch (action.type){
        case "FOLLOW":{
            return {...state, users:state.users.map(el=>el.id===action.userId?{...el,followed:true}:el)}
        }
        case "UNFOLLOW":{
            return {...state, users:state.users.map(el=>el.id===action.userId?{...el,followed:false}:el)}
        }
        default: return state
    }
}


export type FollowACType=ReturnType<typeof FollowAC>
export const FollowAC=(userId:string)=>{
    return{
        type: "FOLLOW",
        userId
    }as const
}

export type UnFollowACType=ReturnType<typeof UnFollowAC>
export const UnFollowAC=(userId:string)=>{
    return{
        type: "UNFOLLOW",
        userId
    }as const
}
