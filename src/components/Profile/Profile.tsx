import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "./MyPosts/Post/Post";


function Profile(props:PostsType) {
    return <div className={s.profile}>
        <ProfileInfo />
        <MyPosts posts={props.posts}/>

    </div>
}

export default Profile