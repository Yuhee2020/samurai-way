import s from "./Dialogs.module.css"
import {Dialog,} from "./Dialog/Dialog";
import {Message,} from "./Message/Message";
import {ActionsTypes, DialogsPageType} from "../../redux/store";


type DialogsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes)=>void
    // addMessage: () => void
    // updateMessage: (newMessage: string) => void

}


function Dialogs(props: DialogsType) {


    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <Dialog dialogs={props.dialogsPage.dialogs}
            />


        </div>
        <div className={s.messages}>
            <Message messages={props.dialogsPage.messages}
                     // addMessage={props.addMessage}
                     // updateMessage={props.updateMessage}
                     messageText={props.dialogsPage.messageText}
                     dispatch={props.dispatch}
            />


        </div>

    </div>
}

export default Dialogs