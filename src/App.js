import React from "react";
import "./App.css";

export default function App() {
  return (
    <>
      
      <div className="wave-bg"></div>
      <div className="wave-bg wave-bg-2"></div>


      <div className="portfolio">
        
        <header className="header">
          <h1 className="name">Tejash K</h1>
          <p className="tagline">Engineering Student • Developer</p>
        </header>


        <section className="card about">
          <h2>About Me</h2>
          <p>
            I am an engineering student passionate about technology, creativity, and problem-solving.
            I have skills in programming, web development, and IoT. Apart from academics, I create artistic works
            like mandala art and portrait sketches. I am enthusiastic about AI, cybersecurity, and building impactful
            projects that solve real-world problems.
          </p>
        </section>

       
        <section className="skills-interests">
          <div className="card">
            <h2>Skills</h2>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>Java & SQL</li>
              <li>IoT Development</li>
              <li>React Basics</li>
            </ul>
          </div>
          <div className="card">
            <h2>Interests</h2>
            <ul>
              <li>Artificial Intelligence</li>
              <li>Cybersecurity</li>
              <li>Web Development</li>
            </ul>
          </div>
        </section>


        <section className="card projects">
          <h2>Projects</h2>
          <div className="project-list">
            {[
              {
                title: "Mood-Based Chat Application",
                desc: "A real-time chat app that changes the UI theme based on the user's mood.",
                link: "https://github.com/datartist0909/Aurify_chat_app",
              },
              {
                title: "Pledge Planet",
                desc: "A gamified app with challenges aimed at reducing plastic pollution through engaging eco-friendly actions.",
                link: "https://github.com/datartist0909/Pledgeplanet",
              },
              {
                title: "Smart AQI Monitoring System",
                desc: "An IoT-based system that tracks air quality, temperature, and humidity in real-time using sensors.",
                link: null, 
              },
            ].map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    View Project
                  </a>
                ) : (
                  <span className="coming-soon">Ongoing</span>
                )}
              </div>
            ))}
          </div>
        </section>

      
        <section className="card contact">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:tejashk.teju2023@gmail.com">tejashk.teju2023@gmail.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/tejash09/">linkedin.com/in/tejash09/</a></p>
          <p>GitHub: <a href="https://github.com/datartist0909">github.com/datartist0909</a></p>
        </section>
      </div>
    </>
  );
}
