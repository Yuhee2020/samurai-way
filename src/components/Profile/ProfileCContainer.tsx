import React from "react";
import {ProfileC} from "./ProfileC";
import {useDispatch, useSelector} from "react-redux";
import {ReducersStateType} from "../../redux/reduxStore";
import {ProfileType, setUserProfileAC} from "../../redux/profileReducer";
import {ChangeLoadingStatusAC} from "../../redux/usersReduser";
// export type ParamsType={id:string}

export const ProfileCContainer = () => {
    // let params=useParams<ParamsType>()
    let dispatch=useDispatch()
    let profile=useSelector<ReducersStateType, ProfileType>(state =>state.profilePage.profile )
    let loadingStatus=useSelector<ReducersStateType, boolean>(state =>state.usersPage.loadingStatus )
    let userId=useSelector<ReducersStateType,number>(state => state.usersPage.userId)
    const setUserProfile=(profile:ProfileType)=> {
        dispatch(setUserProfileAC(profile))
    }
    const changeLoadingStatus=(status:boolean)=>{
        dispatch(ChangeLoadingStatusAC(status))
    }

    return (
        <>
          <ProfileC
              setUserProfile={setUserProfile}
              profile={profile}
              changeLoadingStatus={changeLoadingStatus}
              loadingStatus={loadingStatus}
              userId={userId}
              // params={params.id}
          />
        </>
    );
};

