import s from "./Dialogs.module.css"
import {Dialog,} from "./Dialog/Dialog";
import {Message,} from "./Message/Message";
import {ActionsTypes, DialogsPageType} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {ReducersStateType} from "../../redux/reduxStore";


function Dialogs() {
    const dialogsPage = useSelector<ReducersStateType, DialogsPageType>(state => state.dialogsPage)
    const dispatch = useDispatch()

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <Dialog dialogs={dialogsPage.dialogs}
            />


        </div>
        <div className={s.messages}>
            <Message messages={dialogsPage.messages}
                     messageText={dialogsPage.messageText}
                     dispatch={dispatch}
            />


        </div>

    </div>
}

export default Dialogs