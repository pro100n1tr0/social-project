import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div className={s.content}>
        <div className={s.imgBack}>
            <img src='https://i.pinimg.com/originals/9d/c6/85/9dc685b4d1183be34f10af3f089dc05f.jpg'/>
        </div>
        <div className={s.imgProfile}>
            <img src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'/>
            description
        </div>
    </div>
}

export default ProfileInfo;