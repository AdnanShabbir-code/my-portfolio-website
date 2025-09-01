import React from "react";
import { MdSchool } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2022 - 2026"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">BTech</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Vivekananda Institute of Professional Studies,(GGSIPU)    
              Delhi, India
            </h4>
            
          </VerticalTimelineElement>
          </VerticalTimeline>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Certifications
        </h2>
        <hr />
  
      <VerticalTimeline>  
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="June 2024 - August2024"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<PiCertificate />}
          >
            <h3 className="vertical-timeline-element-title">DSA & MERN Stack</h3>
            <h4 className="vertical-timeline-element-subtitle">
              AcciJob, </h4>
              <h4 >Delhi, India
            </h4>
            <a href="https://drive.google.com/file/d/12nJhzNPIwc_Q6mHzPbnjT0inMXYG3FtH/view">Certificate</a>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="April, 2024"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<PiCertificate />}
          >
            <h3 className="vertical-timeline-element-title">1st position at Delhi Technological University</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Aahvaan (DTU) </h4>
              <a href="https://drive.google.com/file/d/13YMH2SDIpURRcyVRtewADlVOlINk-9Tb/view">Certificate</a>       
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="April, 2023"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<PiCertificate />}
          >
            <h3 className="vertical-timeline-element-title">1st position at gitarattan international business school</h3>
            <h4 className="vertical-timeline-element-subtitle">
              (Rohini) Delhi </h4>
              <a href="https://drive.google.com/file/d/13HtYepgejumZmGHGbZud3Ty3nia2wZ-k/view">Certificate</a>       
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="November, 2024"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<PiCertificate />}
          >
            <h3 className="vertical-timeline-element-title">Set up, manage and monitor a branch office network</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Exploring networking with cisco packet tracer </h4>
              <a href="https://drive.google.com/file/d/13BG-OWnYBc3zp4bEDsgdNtrMkxHELojk/view">Certificate</a>       
          </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="April, 2023"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<PiCertificate />}
          >
            <h3 className="vertical-timeline-element-title">2nd Position at Delhi technological university</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Aahvaan(DTU),
            
            </h4>
            <a href="https://drive.google.com/file/d/13-cHbPbXPDwuwr2pvtBX0j1VNqapynbt/view">Certificate</a>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="February, 2024"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<PiCertificate />}
          >
            <h3 className="vertical-timeline-element-title">Kamakhya cricket league</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Organised Assam Cricket Association,
              <h4 >Noida Cricket Stadium(Noida)
            </h4>
            
            </h4>
            <a href="https://drive.google.com/file/d/13GTxcTPT2xh4fAJACmlxEO0qvnQgYfOK/view">Certificate</a>
          </VerticalTimelineElement>
          </VerticalTimeline>
      
      </div>
    </>
  );
};

export default Education;