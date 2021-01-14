import React from 'react';
import Friend from "./BestFriend/BestFriend";
import s from './Friends.module.css'

const Friends = (props) => {
    let bestFriends = props.state.map( f => <Friend name={f.name} avatar={f.ava}/>)
    return <div className={s.block}>
        {bestFriends}
    </div>
}

export default Friends;