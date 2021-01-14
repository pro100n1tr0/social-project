import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div className={s.content}>
        <div className={s.imgBack}>
            <img src='https://i.pinimg.com/originals/9d/c6/85/9dc685b4d1183be34f10af3f089dc05f.jpg'/>
        </div>
        <div className={s.profile}>
            <img src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'/>
            <p><h2>John Doe</h2>
                <h4>Date of birth: 12.12.2000<br/>
                City: London<br/>
                Education: Oxford Un.<br/>
                Web site: www.john.com</h4>
            </p>
        </div>
        <div className={s.divider}>

        </div>
    </div>
}

export default ProfileInfo;