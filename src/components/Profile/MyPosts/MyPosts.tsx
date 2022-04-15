import React from "react";
import s from "./MyPosts.module.css"
import Post, {PostsType} from "./Post/Post";



function MyPosts(props:PostsType) {
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