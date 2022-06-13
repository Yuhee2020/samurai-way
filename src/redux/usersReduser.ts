export type UserType = {
    id: string
    followed: boolean
    photos: {
        small: string
        large: string
    }
    name: string
    status: string
    location: {
        city: string
        country: string
    }
}

export type UsersPageType = {
    users: UserType[]
    totalCount: number[]
}

let initialState: UsersPageType = {
    users: [
        // {id: v1(), followed:true, photo:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/streams/2012/September/120920/1B3916437-oom-110518-depp-10a.jpg",
        //     name: "Andrew", status: "OOo tonight, you kill me with your smile", location:{city: "Brest", country:"Belarus"}},
        // {id: v1(), followed:false, photo:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/streams/2012/September/120920/1B3916437-oom-110518-depp-10a.jpg",
        //     name: "Baton", status: "So beautiful an wild", location:{city: "Kobrin", country:"Belarus"}},
        // {id: v1(), followed:true,photo:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/streams/2012/September/120920/1B3916437-oom-110518-depp-10a.jpg",
        //     name: "Dima", status: "I am konik", location:{city: "Vilnia", country:"Litva"}},

    ],
    totalCount:[]

}
export const usersReducer = (state: UsersPageType = initialState, action: FollowACType | UnFollowACType | SetUsersACType | GetTotalCountACType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        }
        case "UNFOLLOW": {
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        }
        case "SET-USERS": {
            return {...state, users: action.users}
        }
        case "GET-TOTAL-COUNT": {
            let arr:number[]=[]
            for (let i=1; i<=Math.ceil(action.totalCount/10); i++){
                arr=[...arr, i]}
            debugger
            return {...state, totalCount:arr}

        }


        default:
            return state
    }
}


export type FollowACType = ReturnType<typeof FollowAC>
export const FollowAC = (userId: string) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}

export type UnFollowACType = ReturnType<typeof UnFollowAC>
export const UnFollowAC = (userId: string) => {
    return {
        type: "UNFOLLOW",
        userId
    } as const
}

export type SetUsersACType = ReturnType<typeof SetUsersAC>
export const SetUsersAC = (users: UserType[]) => {
    return {
        type: "SET-USERS",
        users
    } as const
}

export type GetTotalCountACType = ReturnType<typeof GetTotalCountAC>
export const GetTotalCountAC = (totalCount: number) => {
    return {
        type: "GET-TOTAL-COUNT",
        totalCount
    } as const
}