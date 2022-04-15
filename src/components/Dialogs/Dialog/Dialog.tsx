import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogType={
    name: string
    id: number
}

export type DialogsType={
    dialogs:Array<DialogType>
}


export const Dialog=(props:DialogsType) => {
    return(
        <div className={s.dialog}>
            {props.dialogs.map((el)=>{
                return <div key={el.id}>
                    <NavLink to={'/dialogs/' + el.id} activeClassName={s.activeDialog}>{el.name}</NavLink>
                </div>
            })}

        </div>
    )
}