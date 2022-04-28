import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../redux/state";


type DialogType = {
    dialogs: Array<DialogsType>

}


export const Dialog = (props: DialogType) => {
    return (
        <div className={s.dialog}>
            {props.dialogs.map((el) => {
                return <div key={el.id}>
                    <NavLink to={'/dialogs/' + el.id} activeClassName={s.activeDialog}>
                        <img
                            src="data:image/jpeg;base64,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"/>
                        {el.name}
                    </NavLink>
                </div>
            })}

        </div>
    )
}