import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className={s.dialog}>
        <img src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'/>
        <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>
}
export default DialogItem;