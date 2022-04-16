import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsType={
    posts: Array<PostType>
}

function MyPosts(props:MyPostsType) {
    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className={s.posts}>
            <Post posts={props.posts}/>



        </div>
    </div>
}

export default MyPosts