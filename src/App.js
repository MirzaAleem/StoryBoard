import React from "react";
import './App.css'
import Sidebar from "./components/Sidebar.js"
import Assets from './components/Assets.js'

function App() {
  const data = require('./Api/File.json');

  return (
    <div className="App">
      <header className="navTop">
        <img src="./image/logo.jpg" alt="Logo" className="logo"></img>
        <nav>
            <img src="./image/Home_icon.jpg" alt="Home Icon" className="home"></img>
            <img src="./image/setting_icon.jpg" alt="Setting Icon" className="setting"></img>
            <img src="./image/notification_icon.jpg" alt="notification_icon" className="notification"></img>
        </nav>
        <img src="./image/profile_img.jpg" alt="profile" className="profile"></img>
    </header>
    <main>
        <div className="challenge">
            <p>You Are Taking Challenges Of New Project</p>
        </div>
        <div className="assetsContainer">
            <p className="dt">demo task</p>
            {
              data.tasks[0].assets.map((value,index)=>{
                return(
                  <div className="container">
                   <Assets
                key={index.toString()}
                id={value.asset_id}
                val={value}
                />
               </div>
                )
              })
            }
        </div>
    </main>
      <Sidebar key={1000}/>
    </div>
  );
}

export default App;
