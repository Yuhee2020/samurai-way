import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

function MyPosts() {

    const postData = [
        {message: "Hi, how are you?", likesCount: 20},
        {message: "It is my first post", likesCount: 15},
        {message: "Hello, who are you?", likesCount: 30}

    ]

    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className={s.posts}>
            <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
            <Post message={postData[1].message} likesCount={postData[1].likesCount}/>


        </div>
    </div>
}

export default MyPosts