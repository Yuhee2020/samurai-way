import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NaviBar from "./components/NaviBar/NaviBar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import s from "./components/Profile/Profile.module.css";
import {StateType, updateMessage, updateNewPostText} from "./redux/state";


type State = {
    state: StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addMessage: () => void
    updateMessage: (newMessage: string) => void

}

function App(props: State) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">

                <Header/>
                <NaviBar naviBarPage={props.state.naviBarPage}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<Profile profilePage={props.state.profilePage}
                                                                 addPost={props.addPost}
                                                                 updateNewPostText={updateNewPostText}
                        />}/>
                        <Route path="/dialogs" element={<Dialogs dialogsPage={props.state.dialogsPage}
                                                                 addMessage={props.addMessage}
                                                                 updateMessage={updateMessage}/>}/>
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
        </BrowserRouter>);
}

export default App;
