import React from "react";
import {NavLink} from "react-router-dom";
import s from "./NaviBar.module.css";
import {FriendsType, naviBarPageType} from "../../redux/state";

type NaviBarTypes={
    naviBarPage: naviBarPageType
}


function NaviBar(props:NaviBarTypes) {
    return <nav className={s.nav}>
        <div >
            <NavLink to="/profile" className={({isActive})=>isActive? s.activeLink: s.item}>Profile</NavLink>
        </div>
        <div >
            <NavLink to="/dialogs" className={({isActive})=>isActive? s.activeLink: s.item}>Messages</NavLink>
        </div>
        <div >
            <NavLink to="/news" className={({isActive})=>isActive? s.activeLink: s.item}>News</NavLink>
        </div>
        <div >
            <NavLink to="/music" className={({isActive})=>isActive? s.activeLink:s.item}>Music</NavLink>
        </div>
        <div >
            <NavLink to="/settings" className={({isActive})=>isActive? s.activeLink:s.item}>Settings</NavLink>
        </div>
        <div >
            <NavLink to="/friends" className={({isActive})=>isActive? s.activeLink: s.item}>
                <h2 className={s.friends}>Friends</h2>
            </NavLink>
            {props.naviBarPage.friends.map((el)=>{
                return <span key={el.id}> {el.name}  </span>
            })}
        </div>
    </nav>
}

export default NaviBar;