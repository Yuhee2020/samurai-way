import s from "./Dialogs.module.css"
import {Dialog,} from "./Dialog/Dialog";
import {Message,} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type DialogsType={
    dialogsPage: DialogsPageType
}


function Dialogs(props: DialogsType) {


    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <Dialog dialogs={props.dialogsPage.dialogs}/>


        </div>
        <div className={s.messages}>
            <Message messages={props.dialogsPage.messages}/>


        </div>

    </div>
}

export default Dialogs