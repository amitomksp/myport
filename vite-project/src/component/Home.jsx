import React from 'react';
import "./css/Home.css"
import profile from "../images/profile_pic.jpg";
function Home(){
   return (    <div className="homecontainer">
        <div className="homeleft">
            <div className="profile-circle">
            <img src={profile}  alt="" />
            <div className="name">Amit</div>
            
            </div>
           
          
           
        </div>
        <div className="homeright">

        </div>
        </div>
    )
}
export default Home;