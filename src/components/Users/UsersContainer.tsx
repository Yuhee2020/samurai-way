import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ReducersStateType} from "../../redux/reduxStore";
import {
    ChangeLoadingStatusAC,
    ChangeLoadingStatusACType,
    FollowAC,
    GetTotalCountAC,
    SetPageAC,
    SetUsersAC,
    UnFollowAC,
    UserType
} from "../../redux/usersReduser";
import {UsersC} from "./UsersC";


export const UsersContainer = () => {
    let users= useSelector<ReducersStateType, UserType[]>(state => state.usersPage.users)
    let totalCount= useSelector<ReducersStateType, number[]>(state => state.usersPage.totalCount)
    let page= useSelector<ReducersStateType, number>(state => state.usersPage.page)
    let loadingStatus= useSelector<ReducersStateType, boolean>(state => state.usersPage.loadingStatus)

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

    const getTotalCount=(totalCount:number)=>{
        dispatch(GetTotalCountAC(totalCount))
    }

    const setPage=(page:number)=>{
        dispatch(SetPageAC(page))
    }
    const changeLoadingStatus=(status:boolean)=>{
        dispatch(ChangeLoadingStatusAC(status))
    }

    return <>
        <UsersC users={users}
               unfollow={unfollow}
               follow={follow}
               setUsers={setUsers}
                getTotalCount={getTotalCount}
                totalCount={totalCount}
                setPage={setPage}
                page={page}
                loadingStatus={loadingStatus}
                changeLoadingStatus={changeLoadingStatus}
        />
    </>
}

