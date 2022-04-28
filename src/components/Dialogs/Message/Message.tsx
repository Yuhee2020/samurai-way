import React from "react";
import s from "../Dialogs.module.css";
import {MessageType} from "../../../redux/state";


export type MessagesType = {
    messages: Array<MessageType>
    addMessage: ()=>void
    updateMessage:(newMessage:string)=>void
    messageText: string
}

const newMessage= React.createRef<HTMLTextAreaElement>()

export const Message = (props: MessagesType) => {

    const OnChangeHandler=()=>{
        let message= newMessage.current?.value
        message && props.updateMessage(message)}

    return <div className={s.message}>
        {props.messages.map(el => {
            return <div key={el.id}>{el.message}</div>
        })}
        <textarea onChange={OnChangeHandler}
                  ref={newMessage}
                  value={props.messageText}
        />
        <div>
            <button onClick={props.addMessage}>add message</button>
        </div>
    </div>


}