import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsType = {
    posts: Array<PostType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

function MyPosts(props: MyPostsType) {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    // const addPost = () => {
    //     props.addPost()
    //
    // }

    const onPostChange = () => {
        let text = newPostElement.current?.value
        text && props.updateNewPostText(text)

    }

    return <div>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={props.addPost}>Add post</button>
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