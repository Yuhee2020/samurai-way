import {combineReducers, legacy_createStore as createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {naviBarReducer} from "./naviBarReducer";
import {profileReducer} from "./profileReducer";
import {ActionsTypes, StateType} from "./store";

let reducers= combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    naviBarPage:naviBarReducer
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