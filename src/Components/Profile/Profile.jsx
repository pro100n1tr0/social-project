import React from "react";
import s from './Profile.module.css';
import Myposts from "./My posts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return <div className={s.content}>
        <ProfileInfo />
        <Myposts
            posts={props.profilePage.posts}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
            newPostText={props.profilePage.newPostText}/>
    </div>
}

export default Profile;