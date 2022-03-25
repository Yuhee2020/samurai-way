import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NaviBar from "./components/NaviBar/NaviBar";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <NaviBar/>
            <Profile/>
        </div>
    );
}

export default App;
