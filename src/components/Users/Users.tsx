import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ReducersStateType} from "../../redux/reduxStore";
import {FollowAC, SetUsersAC, UnFollowAC, UsersPageType} from "../../redux/usersReduser";
import s from "./Users.module.css"
import axios from "axios";
import {v1} from "uuid";
import userPhoto from "../../images/1B3916437-oom-110518-depp-10a.webp"

export const Users = () => {

    let usersPage = useSelector<ReducersStateType, UsersPageType>(state => state.usersPage)
    let dispatch = useDispatch()
    const getUsers=()=>{
    if (usersPage.users.length ===0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {debugger
        dispatch(SetUsersAC(
           response.data.items))
        })
    }}
    // axios.get("https://social-network.samuraijs.com/api/1.0/users")

    return (
        <div>
            <button onClick={getUsers}>get users</button>
            {usersPage.users.map(el => {
                return (<div className={s.user} key={el.id}>
                        <span><img src={el.photos.small!=null? el.photos.small: userPhoto} className={s.photo}/></span>
                        <span>{el.name}</span> <span>{el.status}</span>
                        <div className={s.location}>{"el.location.city"} {"el.location.country"}</div>
                        {el.followed
                            ? <div>
                                <button onClick={()=>dispatch(UnFollowAC(el.id))}>unfollowed</button>
                            </div>
                            : <div>
                                <button onClick={()=>dispatch(FollowAC(el.id))}>followed</button>
                            </div>}


                    </div>

                )
            })}
        </div>
    )
}
