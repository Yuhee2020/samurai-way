import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

/*const posts = [
    {message: "Hi, how are you?", likesCount: 20},
    {message: "It is my first post", likesCount: 15},
    {message: "Hello, who are you?", likesCount: 30}

]*/
function Profile() {
    return <div className={s.profile}>
        <ProfileInfo />
        <MyPosts posts={posts}/>

    </div>
}

export default Profile