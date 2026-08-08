import React from "react";
import "./About.css";
  //import profilePic from './me.jpg';
const About=() => {
  return (
    <>

      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src="https://github.com/AdnanShabbir-code.png" alt="profile picture" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p> Hi, I’m Adnan Shabbir. I’m a Software Developer passionate about building scalable, secure, and data-driven applications.
                With experience in Java, Spring Boot, SQL, React, Google BigQuery, and Machine Learning,
                I develop FinTech solutions for transaction monitoring and fraud detection. 
                I’m also passionate about Neural Networks and LLMs, exploring how AI can solve real-world problems.
                Beyond tech, I proudly represent DDCA in competitive cricket, where discipline and teamwork shape my approach to engineering.
            </p>
          </div>
        </div>
      </div>

    </>
  );
}

export default About;