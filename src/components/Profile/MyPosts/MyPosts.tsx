import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ProfilePageType,} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {ReducersStateType} from "../../../redux/reduxStore";


function MyPosts() {
    let profilePage=useSelector<ReducersStateType, ProfilePageType>(state=>state.profilePage)
    let dispatch=useDispatch()
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewPostTextAC(e.currentTarget.value))

    }
    const onClickHandler=()=>{
        dispatch(addPostAC())
    }
    return <div>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange}
                          value={profilePage.newPostText}/>
            </div>
            <div>
                <button onClick={onClickHandler}>Add post</button>
            </div>
            <div>
                <button>Remove</button>
            </div>
        </div>

        <div className={s.posts}>
            <Post posts={profilePage.posts}/>
        </div>


    </div>
}

export default MyPosts