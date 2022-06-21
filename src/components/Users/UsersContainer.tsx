import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ReducersStateType} from "../../redux/reduxStore";
import {
    FollowAC,
    GetTotalCountAC,
    GetTotalCountACType, SetPageAC,
    SetUsersAC,
    UnFollowAC,
    UserType
} from "../../redux/usersReduser";
import {Users2} from "./Users2";
import {Users} from "./Users";
import {UsersC} from "./UsersC";


export const UsersContainer = () => {
    let users= useSelector<ReducersStateType, UserType[]>(state => state.usersPage.users)
    let totalCount= useSelector<ReducersStateType, number[]>(state => state.usersPage.totalCount)
    let page= useSelector<ReducersStateType, number>(state => state.usersPage.page)

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

    const GetTotalCount=(toalCount:number)=>{
        dispatch(GetTotalCountAC(toalCount))
    }

    const SetPage=(page:number)=>{
        dispatch(SetPageAC(page))
    }

    return <>
        <UsersC users={users}
               unfollow={unfollow}
               follow={follow}
               setUsers={setUsers}
                GetTotalCount={GetTotalCount}
                totalCount={totalCount}
                SetPage={SetPage}
                page={page}
        />
    </>
}

