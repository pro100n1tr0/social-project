import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
        </div>
        <div>
            <br/>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
        </div>
        <div>
            <br/>
        </div>
        <div className={s.item}>
            <NavLink to='/friends' activeClassName={s.active}>Friends</NavLink>
        </div>
        <div className={s.item}>
            <img src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'/>
            <img src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'/>
            <img src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'/>
            {props.state.friends.name}
        </div>
    </nav>
}

export default Navbar;