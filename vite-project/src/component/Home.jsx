import React from 'react';
import "./css/Home.css"
import profile from "../images/profile_pic.jpg";
function Home(){
   return (    <div className="homecontainer">
        <div className="homeleft">
            <div className="profile-circle">
            <img src={profile}  alt="" />
              </div>
              <div className="name">
                <div className='title'>Amit om kashyap</div>
                <div> Full-stack web developer with knee interest in machine learning and artificial intelligency </div>
              </div>
           
          
           
        </div>
        <div className="homeright">
            <h2>Hello!</h2>
            <a>I'm Amit kumar, a software developer and engineer who likes making projects from scratch and learning new technologies. I'm a electronics and communication engineering student pursuing B. Tech. from NIT Arunachal Pradesh. I like pop music, coding, sketching and shooting photos. Sometimes I write technical blogs.

This is the spot for finding my projects I share with the world 😆.</a>

        </div>
        </div>
    )
}
export default Home;