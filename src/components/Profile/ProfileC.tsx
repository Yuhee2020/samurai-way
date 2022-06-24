import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/profileReducer";
import axios from "axios";
import {Preloader} from "../common/preloader/Preloader";
import {Params} from "react-router-dom";
import {ParamsType} from "./ProfileCContainer";

type PropsType = {
    profile:ProfileType
    setUserProfile:(profile:ProfileType)=>void
    changeLoadingStatus:(status:boolean)=>void
    loadingStatus:boolean
    userId: number
    // params: string | undefined

}

export class ProfileC extends React.Component<PropsType> {

    componentDidMount() {
        this.props.changeLoadingStatus(true)
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/"+this.props.userId).then(response => {
            this.props.setUserProfile(response.data)
            this.props.changeLoadingStatus(false)

        })
    }

    render() {

        return <div className={s.profile}>
            {this.props.loadingStatus && <Preloader/>}
            <ProfileInfo profile={this.props.profile}/>
            <MyPosts/>

        </div>
    }
}
