import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

function MyPosts() {
    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className={s.posts}>
            <Post message={"Hi, how are you?"} likesCount={20}/>
            <Post message={"It is my first post"} likesCount={15}/>
            <Post message={"Hello, who are you?"} likesCount={30}/>

        </div>
    </div>
}

export default MyPosts