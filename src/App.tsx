import React from 'react';
import './App.css';
import NaviBar from "./components/NaviBar/NaviBar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import s from "./components/Profile/Profile.module.css";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileCContainer} from "./components/Profile/ProfileCContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";


const App: React.FC=()=> {
    return (
            <div className="app-wrapper">

                <HeaderContainer/>
                <NaviBar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="profile/:Id" element={<ProfileCContainer/>}/>
                        <Route path="/dialogs" element={<Dialogs/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/*" element={<div>404</div>}/>
                    </Routes>
                    <div>
                        <img className={s.profileImg}
                             src="https://free-png.ru/wp-content/uploads/2021/12/free-png.ru-316.png"/>
                    </div>

                </div>
            </div>
        );
}

export default App;
