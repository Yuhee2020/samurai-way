import React from "react";
import s from "./NaviBar.module.css";


function NaviBar(){
   return <nav className={s.nav}>
       <div className={s.item}><a href="/profile">Profile</a></div>
       <div className={s.item}><a href="/dialogs">Messeges</a></div>
       <div className={s.item}><a>News</a></div>
       <div className={s.item}><a>Music</a></div>
       <div className={s.item}><a>Settings</a></div>
   </nav>
}

export default NaviBar;