import React from "react";
import "./Projects.css";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
        A curated collection of full-stack and data driven projects demonstrating my ability to develop scalable applications, analyze datasets, and deliver intelligent, real-world solutions
        </p>
        {/* card design */}
        <div className="row" id="ads">
          
            <div className="col-md-4">
              <div style={{ marginBottom: "20px" }} className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src="https://play-lh.googleusercontent.com/xxGgPENjxrH2_yQ37oGegaM2lQMe-Zy-8UL7Oh4vhELizZmL0eKVQYGQVJH6XXqKa-Kly13SVLLzPzeSleqfdQ"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Java</span>
                  <span className="card-detail-badge">Spring Boot</span>
                  <span className="card-detail-badge">Eureka Server</span>
                  <span className="card-detail-badge">API Gateway</span>
                  <span className="card-detail-badge">RabbitMq</span>
                  <span className="card-detail-badge">Spring AI</span>
                  <span className="card-detail-badge">Google Gemini API</span>
                  <span className="card-detail-badge">KeyCloak</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MySQL</span>
                  <span className="card-detail-badge">MongoDB</span>
                  <span className="card-detail-badge">PostgreSQL</span>
                  <span className="card-detail-badge">Postman</span>
                  <span className="card-detail-badge">Docker</span>
                  
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      AI Fitness Tracker
                    </h6>
                  </div>
                
                  
                  <a
                    className="ad-btn"
                    href="https://drive.google.com/file/d/14zA0-_pm0jt60SGYl8OtixGl76A6tkvi/view"
                  >
                    Demo Video
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">React</span>
                  <img
                    src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.png"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span style={{ marginLeft: "20px" }} className="card-detail-badge">React</span>
                  <span style={{ marginLeft: "25px" }} className="card-detail-badge">Formspree</span>
                  <span style={{ marginLeft: "20px" }} className="card-detail-badge">Bootstrap</span>
                  <span style={{ marginLeft: "40px" }}className="card-detail-badge">SPA Design</span>
                  <span className="card-detail-badge">React MUI</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Portfolio Website</h6>
                  </div>
     
                  <a
                    className="ad-btn"
                    href="https://github.com/AdnanShabbir-code/my-portfolio-website"
                  >
                    Github 
                  </a>
                  <a
                    className="ad-btn"
                    href="https://drive.google.com/file/d/15AzXoVEsLNPmcLgjQuGUlz6v4g7Gm-aL/view"
                  >
                    Demo Video
                  </a>
                </div>
              </div>
            </div>
           
            
            

        </div>
      </div>
    </>
  );
};

export default Projects;
