import React from "react";
import s from './Profile.module.css';
import Myposts from "./My posts/Myposts";

const Profile = () => {
    return <div className={s.content}>
        <img src='https://photos.smugmug.com/Wallpapers/i-7Tds9J5/0/9d189a52/X2/HDRshooter-super-ultra-wide-wallpaper-034-X2.jpg' />
        <div>
            <img src='https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg' />
            description
        </div>
        <Myposts />
    </div>
}

export default Profile;