import React from "react";
import s from './Profile.module.css';
import Myposts from "./My posts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return <div className={s.content}>
        <ProfileInfo />
        <Myposts posts={props.state.posts}/>
    </div>
}

export default Profile;