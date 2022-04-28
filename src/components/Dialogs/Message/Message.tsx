import React, {ChangeEvent} from "react";
import s from "../Dialogs.module.css";
import {MessageType} from "../../../redux/state";


export type MessagesType = {
    messages: Array<MessageType>
    addMessage: ()=>void
    updateMessage:(newMessage:string)=>void
    messageText: string
}



export const Message = (props: MessagesType) => {
    const onChangeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{props.updateMessage(e.currentTarget.value)}
    return <div className={s.message}>
        {props.messages.map(el => {
            return <div key={el.id}>{el.message}</div>
        })}
        <textarea onChange={onChangeHandler}
                  value={props.messageText}
        />
        <div>
            <button onClick={props.addMessage}>add message</button>
        </div>
    </div>


}