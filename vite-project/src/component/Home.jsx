import React, { useEffect, useState } from 'react';
import "./css/Home.css"
import profile from "../images/about.png";

const AnimatedText = () => {
  const [words, setWords] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const text = "hi i am amit kumar";
    const wordArray = text.split(" ");

    const interval = setInterval(() => {
      if (index < wordArray.length) {
        setWords(prevWords => [...prevWords, wordArray[index]]);
        setIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 500);

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
        <h1 className='name'>" Hello!, i'm "
          <span>Amit Kumar</span>
          " A web Developer "
          <AnimatedText />
        </h1>
        {/* Add additional content here */}
      </div>
    </div>
  )
}

export default Home;
