import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type PropsType = {}

export class ProfileC extends React.Component<PropsType> {


    render() {

        return <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts/>

        </div>
    }
}
