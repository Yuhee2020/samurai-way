export type UserDataType = {
    id: number,
    email: string,
    login: string
}
export type AuthType = {
    data: null | UserDataType
    loginStatus:boolean
}

const initialState: AuthType = {
    data:null,
    loginStatus:false
}

export const authReducer = (state: AuthType = initialState, action: TsarType): AuthType => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state, data:action.data, loginStatus:true}

        }


        default:
            return state
    }
}

type TsarType = setUserDataACType

export type setUserDataACType = ReturnType<typeof setUserDataAC>
export const setUserDataAC = (data:UserDataType) => {
    return {
        type: "SET_USER_DATA",
        data

    } as const
}

