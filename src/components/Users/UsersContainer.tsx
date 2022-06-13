import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ReducersStateType} from "../../redux/reduxStore";
import {FollowAC, SetUsersAC, UnFollowAC, UserType} from "../../redux/usersReduser";
import {Users2} from "./Users2";
import {Users} from "./Users";
import {UsersC} from "./UsersC";


export const UserContainer = () => {
    let users= useSelector<ReducersStateType, UserType[]>(state => state.usersPage.users)
    let dispatch = useDispatch()
    const unfollow = (id: string) => {
        dispatch(UnFollowAC(id))
    }
    const follow = (id: string) => {
        dispatch(FollowAC(id))
    }
    const setUsers = (users: UserType[]) => {
        dispatch(SetUsersAC(users))
    }

    return <>
        <UsersC users={users}
               unfollow={unfollow}
               follow={follow}
               setUsers={setUsers}
        />
    </>
}

