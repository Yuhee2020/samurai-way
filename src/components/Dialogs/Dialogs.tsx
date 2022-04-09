import {NavLink} from "react-router-dom"
import s from "./Dialogs.module.css"

function Dialogs() {
    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialog + " " + s.active}>
                <NavLink to='/dialogs/1' activeClassName={s.activeDialogs}>Dimas</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to='/dialogs/2'> Dasha</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to='/dialogs/3'> Vania</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to='/dialogs/4'> Valera</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to='/dialogs/5'>Irina</NavLink>
            </div>
        </div>
        <div className={s.messages}>
            <div className={s.message}>Hello!</div>
            <div className={s.message}>How are you?</div>
            <div className={s.message}>Where are you?</div>
            <div className={s.message}>Yanky go home!</div>
        </div>

    </div>
}

export default Dialogs