import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


function MyPosts() {

    const posts = [
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
            <Post posts={posts}/>



        </div>
    </div>
}

export default MyPosts