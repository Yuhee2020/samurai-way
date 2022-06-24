import React from "react";
import {ProfileType} from "../../../redux/profileReducer";
import s from "./ProfileInfo.module.css"
type PropsType={
    profile: ProfileType
}

export const ProfileInfo=(props:PropsType)=>{
    return <div className={s.Block}>
        <div><img src={props.profile?.photos.large}/></div>
        <div className={s.info}><span>{props.profile?.fullName}</span>
            <span>looking for a job: {props.profile?.lookingForAJob ? "yes" : "no"}</span>
            <span>{props.profile?.contacts.vk}</span>
            <span>{props.profile?.contacts.github}</span>
            <span>{props.profile?.contacts.facebook}</span>
            <span>{props.profile?.contacts.instagram}</span></div>
    </div>
}