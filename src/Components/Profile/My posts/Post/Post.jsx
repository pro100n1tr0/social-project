import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.item}>
        <img src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'/>
        {props.message}
        <div>
            <span>{props.likes} Likes</span>
        </div>
    </div>
}

export default Post;