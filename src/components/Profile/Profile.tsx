import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";


type ProfileType={
    profilePage: ProfilePageType
    dispatch: (action:ActionsTypes)=>void
    // addPost:() => void
    // updateNewPostText:(newText:string)=>void
}


function Profile(props:ProfileType) {
    return <div className={s.profile}>
        <ProfileInfo />
        <MyPosts posts={props.profilePage.posts}
                 newPostText={props.profilePage.newPostText}
                 dispatch={props.dispatch}
                 // addPost={props.addPost}
                 // updateNewPostText={props.updateNewPostText}
        />

    </div>
}

export default Profile