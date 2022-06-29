import React from "react";
import s from "./Header.module.css";
import logo from "./logo_size.jpg"
import {NavLink} from "react-router-dom";
import {AuthType, UserDataType} from "../../redux/authReducer";
import {authAPI} from "../../api/api";

type PropsType = {
    setUserData: (data: UserDataType) => void
    authData: AuthType
}

export class  HeaderC extends React.Component<PropsType> {

    componentDidMount() {
        authAPI.authMe().then(response => {
            this.props.setUserData(response.data)

        })
    }
    render() {

        return <header className={s.header}>
            <img src={logo}/>
            <span className={s.title}>Social Network </span>
            <div className={s.loginBlock}>{this.props.authData.loginStatus ? this.props.authData.data?.email :
                <NavLink to={'/login'}>Login</NavLink>}</div>
        </header>
    }
}


