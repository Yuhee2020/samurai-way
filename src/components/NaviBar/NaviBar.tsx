import React from "react";
import {NavLink} from "react-router-dom";
import s from "./NaviBar.module.css";


function NaviBar() {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/friends" activeClassName={s.activeLink}>
                <h2 className={s.friends}>Friends</h2>
            </NavLink>
            <span>Vasia</span> <span>Dasha</span> <span>Dima</span>
        </div>
    </nav>
}

export default NaviBar;