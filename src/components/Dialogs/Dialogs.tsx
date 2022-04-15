import s from "./Dialogs.module.css"
import {Dialog, DialogType,} from "./Dialog/Dialog";
import {Message, MessageType,} from "./Message/Message";


type DiMeType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}


function Dialogs(props: DiMeType) {


    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <Dialog dialogs={props.dialogs}/>


        </div>
        <div className={s.messages}>
            <Message messages={props.messages}/>


        </div>

    </div>
}

export default Dialogs