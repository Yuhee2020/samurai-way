import React from "react";
import s from "../Dialogs.module.css";

export type MessageType={
    id: number
    message: string
}
 export type MessagesType={
    messages: Array<MessageType>
}




export const Message = (props: MessagesType) => {
    return <div className={s.message}>
        {props.messages.map(el=>{
            return <div key={el.id}>{el.message}</div>
        })}
    </div>
}