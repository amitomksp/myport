import React from 'react';
import resume from "../images/mycv.jpg";
import "./css/contactme.css"
const ContactMeSection = () => {
  return (
    <div class="contact-container">
        <div class="main-title">
            <h2> <span>Contact</span> ME</h2>
        </div>
        <div class="contact-content-con">
            <div class="left-contact">
                <h4>Contact me here</h4>
                <p>
                "Let's connect and discuss your next project. Drop me a message, and I'll get back to you as soon as possible."
                </p>
                <div class="contact-info">
                    <div class="contact-item">
                        <div class="icon">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Location</span>
                        </div>
                        <p>
                            : London, united Kingdom
                        </p>
                    </div>
                    <div class="contact-item">
                        <div class="icon">
                            <i class="fas fa-envelope"></i>
                            <span>Email</span>
                        </div>
                        <p>
                            <span>: maclinzuniversal@gmail.com</span>
                        </p>
                    </div>
                    <div class="contact-item">
                        <div class="icon">
                            <i class="fas fa-user-graduate"></i>
                            <span>Education</span>
                        </div>
                        <p>
                            <span>: Sussex University, East Sussex</span>
                        </p>
                    </div>
                    <div class="contact-item">
                        <div class="icon">
                            <i class="fas fa-user-graduate"></i>
                            <span>Mobile Number</span>
                        </div>
                        <p>
                            <span>: 07522670617</span>
                        </p>
                    </div>
                    <div class="contact-item">
                        <div class="icon">
                            <i class="fas fa-globe-africa"></i>
                            <span>Languages</span>
                        </div>
                        <p>
                            <span>: Afrikaans, English, Spanish</span>
                        </p>
                    </div>
                </div>
                <div class="contact-icons">
                    <div class="contact-icon">
                        <a href="www.facebook.com" target="_blank">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" target="_blank">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" target="_blank">
                        {/* //github icon */}
                        </a>
                        <a href="#" target="_blank">
                        {/* letcode link */}

                        </a>
                    </div>
                </div>
            </div>
            <div class="right-contact">
                <form action="" class="contact-form">
                    <div class="input-control i-c-2">
                        <input type="text" required placeholder="YOUR NAME"></input>
                        <input type="email" required placeholder="YOUR EMAIL"></input>
                    </div>
                    <div class="input-control">
                        <input type="text" required placeholder="ENTER SUBJECT"></input>
                    </div>
                    <div class="input-control">
                        <textarea name="" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
                    </div>
                    <div class="submit-btn">
                        <a href="#" class="main-btn">
                            <span class="btn-text">Download CV</span>
                            <span class="btn-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" class="w-1 h-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg></span>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default ContactMeSection;
