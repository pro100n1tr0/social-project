import React from "react";
import s from './Myposts.module.css';
import Post from "./Post/Post";

const Myposts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} likes={p.likes}/>)
    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <textarea>New post</textarea>
        </div>
        <div>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default Myposts;