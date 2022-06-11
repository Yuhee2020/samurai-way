import React from "react";
import {UserType} from "../../redux/usersReduser";
import s from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../images/1B3916437-oom-110518-depp-10a.webp"

type PropsType={
    users: UserType[]
    unfollow: (id: string)=>void
    follow: (id: string)=>void
    setUsers: (users: UserType[])=>void

}

export const Users2 = (props:PropsType) => {

    const getUsers=()=>{
    if (props.users.length ===0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        props.setUsers(response.data.items)
        })
    }}
    return (
        <div>
            <button onClick={getUsers}>get users</button>
            {props.users.map(el => {
                return (<div className={s.user} key={el.id}>
                        <span><img src={el.photos.small!=null? el.photos.small: userPhoto} className={s.photo}/></span>
                        <span>{el.name}</span> <span>{el.status}</span>
                        <div className={s.location}>{"el.location.city"} {"el.location.country"}</div>
                        {el.followed
                            ? <div>
                                <button onClick={()=>props.unfollow(el.id)}>unfollowed</button>
                            </div>
                            : <div>
                                <button onClick={()=>props.follow(el.id)}>followed</button>
                            </div>}


                    </div>

                )
            })}
        </div>
    )
}
