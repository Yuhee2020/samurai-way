import React from "react";
import {NavLink} from "react-router-dom";
import s from "./NaviBar.module.css";
import {naviBarPageType} from "../../redux/store";
import {useSelector} from "react-redux";
import {ReducersStateType} from "../../redux/reduxStore";

function NaviBar() {
    let naviBarPage=useSelector<ReducersStateType, naviBarPageType>(state => state.naviBarPage)
    let className=({isActive}:any):any=>isActive? s.activeLink: s.item
    return <nav className={s.nav}>
        <div >
            <NavLink to="/profile" className={className}>Profile</NavLink>
        </div>
        <div >
            <NavLink to="/dialogs" className={className}>Messages</NavLink>
        </div>
        <div >
            <NavLink to="/news" className={className}>News</NavLink>
        </div>
        <div >
            <NavLink to="/music" className={className}>Music</NavLink>
        </div>
        <div >
            <NavLink to="/settings" className={className}>Settings</NavLink>
        </div>
        <div >
            <NavLink to="/friends" className={className}>
                <h2 className={s.friends}>Friends</h2>
            </NavLink>
            {naviBarPage.friends.map((el)=>{
                return <span key={el.id}> {el.name}  </span>
            })}
        </div>
    </nav>
}

export default NaviBar;