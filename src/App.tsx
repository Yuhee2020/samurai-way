import React from 'react';
import './App.css';
import Header from "./components/Header";
import NaviBar from "./components/NaviBar";
import Profile from "./components/Profile";

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
