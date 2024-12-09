import "./styles/App.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useState } from "react";
import SkillsShowcase from "./components/SkillsShowcase";
import Profile from "./components/Profile.js"
import ResumeButton from "./components/ResumeButton.js";

function App() {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".App",
      start: "start start",
      end: "+=100%",
      pin: ".home",
      pinSpacing: false,
    });

    gsap.to(".works", {
      scale: 1,
      scrollTrigger: {
        trigger: ".works",
        start: "start center",
        end: "end start",
        scrub: true,
      },
    });
  });

  const handleDownload = () => {
    // Create an anchor element
    const link = document.createElement("a");
    link.href = "/rajeev'sResume.pdf"; // path to your PDF in the public folder
    link.download = "rajeev'sResume.pdf"; // filename for the download
    link.click(); // Simulate a click to start the download
    // setTimeout(() => {
    //   const filePath = "/rajeev'sResume.pdf"; // This can be a local path to the file
    //   window.open(filePath, "_blank"); // Open the file in a new tab after download starts
    // }, 5000);
  };

  return (
    <div className="container ">
        <Profile />
      <div className="App">
        <div className="home">
          <div className="main">
            <div className="title">
              <h1 className="heading">Rajeev's</h1>
              <h1 className="heading">Studio</h1>
            </div>
            <div className="arrow">
              <svg id="eat6GYvfNiX1" viewBox="0 0 1000 1000">
                <path
                  d="M200.872798,122.043256l259.429941.433216L628.50139,416.70822L357.237521,883.481109l-259.920489-.000001L369.345758,412.623077L200.872798,122.043256Z"
                  transform="translate(.000001 0.000002)"
                  strokeWidth="2"
                />
                <path
                  d="M513.743263,122.476474l254.997321-.433216L936.699562,416.708222L768.740584,705.108719h-254.997321L682.833506,416.708222L513.743263,122.476474Z"
                  transform="translate(.000004 0)"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <div className="divider"></div>
          <div className="slogan">
            <div className="">Your digital presence, beautifully</div>
            <div className="">designed and expertly built.</div>
          </div>
        </div>
      </div>
      <div className="works">
        <div className="portfolio-header">
          <div className="header-part">
            <div className="header-text">Portfolio</div>
            <div className="header-text">See All Projects &rarr;</div>
          </div>
          <div className="divider"></div>
          <h1 className="our-works-heading">Selected works</h1>
          <div className="our-works">
            <div className="work">
              <span>1.</span>
              <span>Restaurant Food App</span>
              <span>
                <a href="https://foodvillafront.onrender.com/">+</a>
              </span>
            </div>
            <div className="work">
              <span>2.</span>
              <span>3d Model used in web</span>
              <span>
                <a href="https://rajeevs-portfolio.vercel.app/">+</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us">
        <div className="quote">
          <h1>WE HAVE</h1>
          <h1>BEEN</h1>
          <h1>WAITING</h1>
          <h1>FOR YOU.</h1>
          <p>GET YOUR WEBSITE NOW.</p>
        </div>
        <div className="query">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Jane smith" />
          <label htmlFor="">Email</label>
          <input type="text" placeholder="jane@prgmaz.com" />
          <label htmlFor="">Location</label>
          <input type="text" placeholder="select..." />
          <button>Submit</button>
        </div>
      </div>
      <div className="video-container">
        <h1>WE WORK HARD TO MAKE IT ALIVE.</h1>
        <video width="1600" autoPlay loop>
          <source src="./working.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <SkillsShowcase />
      <div className="resume">
        <h1>DOWNLOAD RESUME</h1>
        <br />
        <ResumeButton onClick={handleDownload} />
      </div>
      
    </div>
  );
}

export default App;
