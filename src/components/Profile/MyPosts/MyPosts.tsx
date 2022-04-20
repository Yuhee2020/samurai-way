import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsType = {
    posts: Array<PostType>
    addPost:(postMessage: string ) => void
}

function MyPosts(props: MyPostsType) {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost=()=>{
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }
    }

    return <div>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
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