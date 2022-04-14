import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import dialogs from "../Dialogs";

type DialogProps={
    name:string
    id: number
}
type DialogsPropsType ={
    dialogs: Array<DialogProps>
}


export const Dialog=(props:DialogsPropsType) => {
    return(
        <div className={s.dialog}>
            {props.dialogs.map((el)=>{
                return <div>
                    <NavLink to={'/dialogs/' + el.id} activeClassName={s.activeDialog}>{el.name}</NavLink>
                </div>
            })}

        </div>
    )
}