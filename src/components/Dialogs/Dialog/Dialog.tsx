import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogProps={
    name:string
    id: number
}


export const Dialog=(props:DialogProps) => {
    return(
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.activeDialog}>{props.name}</NavLink>
        </div>
    )
}