import {combineReducers, legacy_createStore as createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {naviBarReducer} from "./naviBarReducer";
import {profileReducer} from "./profileReducer";
import {ActionsTypes, StateType} from "./store";
import {usersReducer} from "./usersReduser";
import {authReducer} from "./authReducer";

export type ReducersStateType=ReturnType<typeof reducers>
let reducers= combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    naviBarPage:naviBarReducer,
    usersPage:usersReducer,
    auth:authReducer
})
export let store = createStore(reducers)

export type ReduxStoreType2=typeof store
export type ReduxStoreType = {
    // _state: StateType
    // updateMessage: (newMessage: string)=>void
    // addMessage:()=>void
    // updateNewPostText:(newText: string)=>void
    // addPost:()=>void
    // rerenderTree:()=>void
    subscribe:(observer: () => void)=>void
    getState:()=>StateType
    dispatch: (action:ActionsTypes)=>void
}

// @ts-ignore
window.store=store