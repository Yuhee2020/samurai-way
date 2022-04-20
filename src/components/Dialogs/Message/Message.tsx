import React from "react";
import s from "../Dialogs.module.css";
import {MessageType} from "../../../redux/state";


export type MessagesType = {
    messages: Array<MessageType>
}

const newMessage= React.createRef<HTMLTextAreaElement>()

export const Message = (props: MessagesType) => {
    const addMessage=()=>{
       alert(newMessage.current?.value)
    }

    return <div className={s.message}>
        {props.messages.map(el => {
            return <div key={el.id}>{el.message}</div>
        })}
        <textarea ref={newMessage}></textarea>
        <div>
            <button onClick={addMessage}>add message</button>
        </div>
    </div>


}