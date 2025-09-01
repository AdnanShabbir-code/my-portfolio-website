import React from "react";
import "./About.css";
  import profilePic from './me.jpg.jpg';
const About=() => {
  return (
    <>

      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={profilePic} alt="profile picture" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              Hi, I am Adnan Shabbir, a B.Tech Computer Science Engineering student at Vivekananda Institute of Professional Studies, Delhi, with a strong interest in software development and problem-solving. I am currently building my skills in Java, object-oriented programming, and data structures, and gradually expanding my knowledge of core computer science subjects.

              I enjoy taking on challenges that push me to grow, whether it is writing efficient code, working on projects, or preparing for placements. My goal is to become a skilled software developer while continuously learning and adapting to new technologies.

              Outside academics, I am a passionate Professional cricketer, managing both cricket with academics, where I have learned discipline, focus, and resilience. I also create and edit cricket content, combining my interests in sports and creativity.

              I believe in consistency, hard work, and continuous improvement. Feel free to explore my projects and connect with me!
            </p>
          </div>
        </div>
      </div>

    </>
  );
}

export default About;