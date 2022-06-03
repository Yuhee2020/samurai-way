import React, {ChangeEvent} from "react";
import s from "../Dialogs.module.css";
import {ActionsTypes, MessageType} from "../../../redux/store";
import {addMessageAC, updateMessageAC} from "../../../redux/dialogsReducer";


export type MessagesType = {
    messages: Array<MessageType>
    messageText: string
    dispatch: (action: ActionsTypes) => void
}


export const Message = (props: MessagesType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateMessageAC(e.currentTarget.value))
    }
    const onClickHandler = () => {
        props.dispatch(addMessageAC())
    }

    return <div className={s.message}>
        {props.messages.map(el => {
            return <div key={el.id}>{el.message}</div>
        })}
        <textarea onChange={onChangeHandler}
                  value={props.messageText}
        />
        <div>
            <button onClick={onClickHandler}>add message</button>
        </div>
    </div>


}