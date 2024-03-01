import React, { useEffect, useState } from 'react';
import "./css/Home.css"
import profile from "../images/about.png";

const AnimatedText = () => {
  const [words, setWords] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const text = "A web Developer and DevOps engineer";
    const wordArray = text.split(" ");

    const interval = setInterval(() => {
      if (index < wordArray.length) {
        setWords(prevWords => [...prevWords, wordArray[index]]);
        setIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 600);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div>
      {words.map((word, index) => (
        <span key={index}>
          {word}{' '}
        </span>
      ))}
    </div>
  );
};

function Home() {
  return (
    <div className="homecontainer background-image">
      <div className="homeleft">
        <div className="profile-circle">
          <img src={profile} alt="" />
        </div>
      </div>
      <div className="homeright">
        <h1 className='name'>" Hello!, i'm " <strong className='green'>Amit Kumar"</strong>
          <span className='animate'><AnimatedText /></span>
          
          
        </h1>
        <div class="btn-con">
  <a href="" class="main-btn">
    <span class="btn-text">Download CV</span>
    <span class="btn-icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" class="w-1 h-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    </span>
  </a>
</div>

        
      </div>
    </div>
  )
}

export default Home;
