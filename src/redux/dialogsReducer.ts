import {v1} from "uuid";
import {ActionsTypes, DialogsPageType, MessageType} from "./store";

let initialState={
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
}
export const dialogsReducer=(state:DialogsPageType = initialState, action:ActionsTypes )=>{
    switch (action.type){
        case "UPDATE-MESSAGE":{
            state.messageText =action.newMessage
            return state
        }case "ADD-MESSAGE": {
            let newMessage: MessageType = {id: v1(), message: state.messageText}
            state.messages.unshift(newMessage)
            state.messageText = ""
            return state
        }default: return state
    }
}

export type updateMessageACType=ReturnType<typeof updateMessageAC>
export const updateMessageAC=(newMessage:string)=>{
    return{
        type: "UPDATE-MESSAGE",
        newMessage: newMessage
    }as const
}

export type addMessageACType=ReturnType<typeof addMessageAC>
export const addMessageAC=()=>{
    return{
        type: "ADD-MESSAGE"

    }as const
}