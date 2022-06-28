import React from "react";
import s from "./Header.module.css";
import {HeaderC} from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {AuthType, setUserDataAC, setUserDataACType, UserDataType} from "../../redux/authReducer";
import {ReducersStateType} from "../../redux/reduxStore";

export function HeaderContainer() {
   let dispatch=useDispatch()
    const setUserData=(data:UserDataType)=>dispatch(setUserDataAC(data))
    let authData=useSelector<ReducersStateType,AuthType>(state => state.auth)
    debugger
    return <>
       <HeaderC
           setUserData={setUserData}
           authData={authData}/>
    </>
}

