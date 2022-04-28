import s from "./Dialogs.module.css"
import {Dialog,} from "./Dialog/Dialog";
import {Message,} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type DialogsType = {
    dialogsPage: DialogsPageType
    addMessage: () => void
    updateMessage: (newMessage: string) => void

}


function Dialogs(props: DialogsType) {


    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <Dialog dialogs={props.dialogsPage.dialogs}
            />


        </div>
        <div className={s.messages}>
            <Message messages={props.dialogsPage.messages}
                     addMessage={props.addMessage}
                     updateMessage={props.updateMessage}
                     messageText={props.dialogsPage.messageText}
            />


        </div>

    </div>
}

export default Dialogs