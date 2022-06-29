import React from "react";
import {UserType} from "../../redux/usersReduser";
import s from "./Users.module.css"
import userPhoto from "../../images/1B3916437-oom-110518-depp-10a.webp"
import {Preloader} from "../common/preloader/Preloader";
import {NavLink} from "react-router-dom";
import {FollowUnFollowAPI, getUsersAPI} from "../../api/api";

type PropsType = {
    users: UserType[]
    unfollow: (id: string) => void
    follow: (id: string) => void
    setUsers: (users: UserType[]) => void
    getTotalCount: (totalCount: number) => void
    totalCount: number[]
    setPage: (page: number) => void
    page: number
    loadingStatus: boolean
    changeLoadingStatus: (status: boolean) => void
    setUserId: (id: number) => void

}

/// for example using class component
export class UsersC extends React.Component<PropsType> {

    componentDidMount() {
        this.props.changeLoadingStatus(true)
        getUsersAPI.getUsers(null).then(response => {
            this.props.setUsers(response.items)
            this.props.getTotalCount(response.totalCount)
            this.props.changeLoadingStatus(false)
        })
    }

    checkPage = (page: number) => {
        this.props.changeLoadingStatus(true)
        this.props.setPage(page)
        getUsersAPI.getUsers(page).then(response => {
            this.props.setUsers(response.items)
            this.props.changeLoadingStatus(false)


        })
    }


    render() {
        return (
            <div>
                {this.props.loadingStatus && <Preloader/>}
                {this.props.totalCount.slice(((this.props.page - 5) < 0 ? 0 : this.props.page - 5), this.props.page + 5).map(el => {
                    return <span key={el} className={el == this.props.page ? s.page : ""}
                                 onClick={() => this.checkPage(el)}> {el} </span>
                })}

                {this.props.users.map(el => {
                    return (<div className={s.user} key={el.id}>
                            <NavLink onClick={() => this.props.setUserId(Number(el.id))} to={"/profile/" + el.id}><span><img
                                src={el.photos.small != null ? el.photos.small : userPhoto}
                                className={s.photo}/></span>
                                <span>{el.name}</span> <span>{el.status}</span></NavLink>
                            <div className={s.location}>{"el.location.city"} {"el.location.country"}</div>
                            {el.followed
                                ? <div>
                                    <button disabled={this.props.loadingStatus}
                                        onClick={() => {
                                            this.props.changeLoadingStatus(true)
                                            FollowUnFollowAPI.deleteFollow(el.id).then(response => {
                                                response.resultCode === 0 &&
                                                this.props.unfollow(el.id)
                                                this.props.changeLoadingStatus(false)
                                            })
                                        }
                                        }>unfollowed
                                    </button>
                                </div>
                                : <div>
                                    <button disabled={this.props.loadingStatus} onClick={() => {
                                        this.props.changeLoadingStatus(true)
                                        FollowUnFollowAPI.postFollow(el.id).then(response => {
                                            response.resultCode === 0 &&
                                            this.props.follow(el.id)
                                            this.props.changeLoadingStatus(false)
                                        })
                                    }}>
                                        followed
                                    </button>
                                </div>}
                        </div>
                    )
                })}
                {this.props.totalCount.slice(((this.props.page - 5) < 0 ? 0 : this.props.page - 5), this.props.page + 5).map(el => {
                    return <span key={el} className={el == this.props.page ? s.page : ""}
                                 onClick={() => this.checkPage(el)}> {el} </span>
                })}
            </div>
        )
    }
}