import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NaviBar from "./components/NaviBar/NaviBar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import s from "./components/Profile/Profile.module.css";
import {PostType} from "./components/Profile/MyPosts/Post/Post";
import {DialogType} from "./components/Dialogs/Dialog/Dialog";
import {MessageType} from "./components/Dialogs/Message/Message";

type AppTypes={
    posts:Array<PostType>
    dialogs: Array<DialogType>
    messages:Array<MessageType>
}



function App(props:AppTypes) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">

                <Header/>
                <NaviBar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={()=><Profile posts={props.posts}/>}/>
                    <Route path="/dialogs" render={()=><Dialogs dialogs={props.dialogs} messages={props.messages} />}/>
                    <Route path="/news" render={()=><News/>}/>
                    <Route path="/music" render={()=><Music/>}/>
                    <Route path="/settings" render={()=><Settings/>}/>
                    <div>
                        <img className={s.profileImg}
                             src="https://free-png.ru/wp-content/uploads/2021/12/free-png.ru-316.png"/>
                    </div>

                </div>
            </div>
        </BrowserRouter>);
}

export default App;
