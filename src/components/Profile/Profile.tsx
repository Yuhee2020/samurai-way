import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";


type ProfileType={
    profilePage: ProfilePageType
    dispatch: (action:ActionsTypes)=>void
}


function Profile(props:ProfileType) {
    return <div className={s.profile}>
        <ProfileInfo />
        <MyPosts/>

    </div>
}



export default Profile