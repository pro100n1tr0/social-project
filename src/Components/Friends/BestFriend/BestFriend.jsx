import React from "react";
import s from './BestFriend.module.css';

const Friend = (props) => {
    return <div className={s.item}>
            <img src={props.avatar}/>
            <p>{props.name}</p>
    </div>
}

export default Friend;