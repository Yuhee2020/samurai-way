import React from "react";
import s from "./Header.module.css";
import logo from "./logo_size.jpg"

function Header() {
    return <header className={s.header}>
        <img src={logo}/>
        <span className={s.title}>Social Network </span>
    </header>
}


export default Header;