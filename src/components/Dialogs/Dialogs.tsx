import {NavLink} from "react-router-dom"
import s from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import { Message } from "./Message/Message";

function Dialogs() {

    const dialogs =[
        {name:"Dimas",id:1},
        {name:"Dasha",id:2},
        {name:"Vania",id:3},
        {name:"Valera",id:4},
        {name:"Irina",id:5},
    ]

    const messages = [
        {id:1, message:"Hello"},
        {id:2, message:"How are you?"},
        {id:3, message:"Where are you?"},
        {id:4, message:"Good bye!"}
    ]

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <Dialog dialogs={dialogs}/>


        </div>
        <div className={s.messages}>
            <Message messages={messages}/>



        </div>

    </div>
}

export default Dialogs