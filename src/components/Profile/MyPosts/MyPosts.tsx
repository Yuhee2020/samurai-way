import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionsTypes, addPostAC, PostType, updateNewPostTextAC} from "../../../redux/state";

type MyPostsType = {
    posts: Array<PostType>
    // addPost: () => void
    newPostText: string
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}

function MyPosts(props: MyPostsType) {
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextAC(e.currentTarget.value))
        // props.updateNewPostText(e.currentTarget.value)
    }
    const onClickHandler=()=>{
        props.dispatch(addPostAC())
    }
    return <div>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onClickHandler}>Add post</button>
            </div>
            <div>
                <button>Remove</button>
            </div>
        </div>

        <div className={s.posts}>
            <Post posts={props.posts}/>
        </div>


    </div>
}

export default MyPosts