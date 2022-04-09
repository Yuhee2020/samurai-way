import {NavLink} from "react-router-dom"
import s from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import { Message } from "./Message/Message";

function Dialogs() {
    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <Dialog name={"Dimas"} id={1}/>
            <Dialog name={"Dasha"} id={2}/>
            <Dialog name={"Vania"} id={3}/>
            <Dialog name={"Valera"} id={4}/>
            <Dialog name={"Irina"} id={5}/>
        </div>
        <div className={s.messages}>
            <Message message={"Hello"}/>
            <Message message={"How are you?"}/>
            <Message message={"Where are you?"}/>
            <Message message={"Good bye!"}/>

        </div>

    </div>
}

export default Dialogs