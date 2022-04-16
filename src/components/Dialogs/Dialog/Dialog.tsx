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
                    <NavLink to={'/dialogs/' + el.id} activeClassName={s.activeDialog}>{el.name}</NavLink>
                </div>
            })}

        </div>
    )
}