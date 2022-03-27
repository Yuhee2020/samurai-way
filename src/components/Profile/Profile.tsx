import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return <div className={s.profile}>
        <div>
            ava+description
        </div>
        <MyPosts/>
        <div>
            <img className={s.profileImg}
                 src="https://free-png.ru/wp-content/uploads/2021/12/free-png.ru-316.png"/>
        </div>
    </div>
}

export default Profile