import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type ProfileType={
    profilePage: ProfilePageType
}


function Profile(props:ProfileType) {
    return <div className={s.profile}>
        <ProfileInfo />
        <MyPosts posts={props.profilePage.posts}/>

    </div>
}

export default Profile