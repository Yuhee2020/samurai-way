import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ReducersStateType} from "../../redux/reduxStore";
import {FollowAC, UnFollowAC, UsersPageType} from "../../redux/usersReduser";
import s from "./Users.module.css"

export const Users = () => {
    let usersPage = useSelector<ReducersStateType, UsersPageType>(state => state.usersPage)
    let dispatch = useDispatch()

    return (
        <div>
            {usersPage.users.map(el => {
                return (<div className={s.user} key={el.id}>
                        <span><img src={el.photo} className={s.photo}/></span>
                        <span>{el.name}</span> <span>{el.status}</span>
                        <span>{el.location.city} {el.location.country}</span>
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
