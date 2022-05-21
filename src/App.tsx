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
import {StoreType,} from "./redux/store";
import {ReduxStoreType} from "./redux/reduxStore";


type PropsType = {
    store: ReduxStoreType
}

const App: React.FC<PropsType>=(props)=> {
    const state=props.store.getState()
    return (

            <div className="app-wrapper">

                <Header/>
                <NaviBar naviBarPage={state.naviBarPage}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<Profile profilePage={state.profilePage}
                                                                 dispatch={props.store.dispatch.bind(props.store)}
                                                                 // addPost={props.store.ts.addPost.bind(props.store.ts)}
                                                                 // updateNewPostText={props.store.ts.updateNewPostText.bind(props.store.ts)}
                        />}/>
                        <Route path="/dialogs" element={<Dialogs dialogsPage={state.dialogsPage}
                                                                 dispatch={props.store.dispatch.bind(props.store)}
                                                                 // addMessage={props.store.ts.addMessage.bind(props.store.ts)}
                                                                 // updateMessage={props.store.ts.updateMessage.bind(props.store.ts)}
                        />}/>
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
