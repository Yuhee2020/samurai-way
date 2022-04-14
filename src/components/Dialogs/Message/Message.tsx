import React from "react";
import s from "../Dialogs.module.css";

type MessageType = {
    message: string
    id: number
}
  export  type MessagePropsType={
    messages: Array<MessageType>
    }

export const Message = (props: MessagePropsType) => {
    return <div className={s.message}>
        {props.messages.map(el=>{
            return <div>{el.message}</div>
        })}
    </div>
}