import {v1} from "uuid";
import {ActionsTypes, DialogsPageType, MessageType} from "./state";

export const dialogsReducer=(state:DialogsPageType, action:ActionsTypes )=>{
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