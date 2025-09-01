import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/RESUME.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./Home.css";
import { useTheme } from "../../context/ThemeContext";


const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Software Engineer!",
                    "Professional Cricketer!",
                    "Content Creator!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          
          
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://wa.me/919693564240"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a className="btn btn-cv" href={Resume} download="Adnan_resume.pdf">
                My Resume
              </a>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default Home;