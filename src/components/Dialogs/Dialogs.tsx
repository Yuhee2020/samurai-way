import s from "./Dialogs.module.css"

function Dialogs() {
    return <div className={s.dialogs}>
        <div className={s.users}>
            <div className={s.user + " " + s.active}>
                Dimas
            </div>
            <div className={s.user}>
                Dasha
            </div>
            <div className={s.user}>
                Vania
            </div>
            <div className={s.user}>
                Valera
            </div>
            <div className={s.user}>
                Irina
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