import React from "react";
import {UserType} from "../../redux/usersReduser";
import s from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../images/1B3916437-oom-110518-depp-10a.webp"
import {ReactComponent} from "*.svg";

type PropsType={
    users: UserType[]
    unfollow: (id: string)=>void
    follow: (id: string)=>void
    setUsers: (users: UserType[])=>void

}

export class UsersC extends React.Component<PropsType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?page").then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {
        return (
            <div>
                <div>1 2 3 4 5</div>
                {this.props.users.map(el => {
                    return (<div className={s.user} key={el.id}>
                            <span><img src={el.photos.small!=null? el.photos.small: userPhoto} className={s.photo}/></span>
                            <span>{el.name}</span> <span>{el.status}</span>
                            <div className={s.location}>{"el.location.city"} {"el.location.country"}</div>
                            {el.followed
                                ? <div>
                                    <button onClick={()=>this.props.unfollow(el.id)}>unfollowed</button>
                                </div>
                                : <div>
                                    <button onClick={()=>this.props.follow(el.id)}>followed</button>
                                </div>}


                        </div>

                    )
                })}
            </div>
        )
    }
}