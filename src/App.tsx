import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NaviBar from "./components/NaviBar/NaviBar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import s from "./components/Profile/Profile.module.css";


const App: React.FC=(props)=> {
    return (

            <div className="app-wrapper">

                <Header/>
                <NaviBar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/dialogs" element={<Dialogs/>}/>
                        <Route path="/news" element={<News/>}/>
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
