import React from "react";
import s from './Myposts.module.css';
import Post from "./Post/Post";

const Myposts = (props) => {
    let newPostElement = React.createRef();
    let newPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    let postsElements = props.posts.map( p => <Post message={p.message} likes={p.likes}/>)
    return <div className={s.postsBlock}>
        <div>
            <h2>My posts</h2>
        </div>
        <div>
            <textarea onChange={onPostChange} ref={newPostElement} className={s.newPostArea} value={props.newPostText}/>
        </div>
        <div>
            <button onClick={newPost} className={s.postBtn}>Add post</button>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default Myposts;