import React, { useState, useEffect } from "react";
import "./App.css";
import pythonLogo from "./assets/python-logo.png";
import htmlLogo from "./assets/html-logo.png";
import cssLogo from "./assets/css-logo.png";
import jsLogo from "./assets/js-logo.png";
import reactLogo from "./assets/react-logo.png";
import mysqlLogo from "./assets/mysql.png";
import awsLogo from "./assets/aws-logo.png";
import officeLogo from "./assets/office-logo.png";
import phoneIcon from "./assets/phone-icon.png";
import emailIcon from "./assets/email-icon.png";
import locationIcon from "./assets/location-icon.png";
import linkedinIcon from "./assets/linkedin-icon.png";
import resumeFile from "./assets/RESUME.pdf";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const savedLikes = localStorage.getItem("likes");
    const savedLikedStatus = localStorage.getItem("liked");

    if (savedLikes) {
      setLikes(Number(savedLikes));
    }
    if (savedLikedStatus) {
      setLiked(JSON.parse(savedLikedStatus));
    }
  }, []);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleLike = () => {
    const newLikedStatus = !liked;
    setLiked(newLikedStatus);
    const newLikes = newLikedStatus ? likes + 1 : likes - 1;
    setLikes(newLikes);

    // Save to localStorage
    localStorage.setItem("likes", newLikes);
    localStorage.setItem("liked", JSON.stringify(newLikedStatus));
  };

  return (
    <div className="App">
      <header>
        <div className="logo">AP</div>
        <div className="menu-icon" onClick={toggleModal}>
          &#9776;
        </div>
      </header>
      <main id="home" className={modalOpen ? "blur" : ""}>
        <section className="intro">
          <h1 className="big-text">
            Designer
            <br />&<br />
            Developer<span className="blinking-dot">.</span>
          </h1>
          <p className="typing-animation">
           Creating elegant solutions with passion.
          </p>
        </section>
      </main>
      <footer className={modalOpen ? "blur" : ""}>
        <p>&copy; 2024 Abhiram. All rights reserved.</p>
      </footer>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content-scrollable">
            <span className="closebtn" onClick={toggleModal}>
              &times;
            </span>
            <nav className="modal-nav">
              <a href="#about-section">About</a>
              <a href="#skills-section">Skills</a>
              <a href="#experience-section">Experience</a>
              <a href="#projects-section">Projects</a>
              <a href="#contact-section">Contact</a>
            </nav>
            <div className="modal-section" id="about-section">
              <h2>About Me</h2>
              <img
                src="./abhi.jpg"
                alt="Abhiram"
                className="modal-profile-pic"
              />
              <div className="about-content">
                <p className="greeting">
                  <strong>Hello,</strong>
                </p>
                <p>
                  I'm Abhiram, a B.Tech graduate in Computer Science from
                  Kerala, India. With a passion for web and app development, as
                  well as design, I bring 8 months of hands-on experience in
                  UI/UX development, data engineering, and data labeling
                  annotation. I am committed to delivering high-quality,
                  innovative solutions that meet client needs.
                </p>
                <p>
                  If you're looking for a dedicated and skilled developer to
                  join your team, I'd be thrilled to connect. Please feel free
                  to reach out to me.
                </p>
                <p>
                  You can also{" "}
                  <a href={resumeFile} download="">
                    download my resume
                  </a>{" "}
                  to learn more about my experience and skills.
                </p>
              </div>
            </div>
            <div className="modal-section" id="skills-section">
              <h2>Skills</h2>
              <div className="skills-section">
                <div className="skill">
                  <img src={pythonLogo} alt="Python" className="skill-icon" />
                  <p>Python</p>
                </div>
                <div className="skill">
                  <img src={htmlLogo} alt="HTML" className="skill-icon" />
                  <p>HTML</p>
                </div>
                <div className="skill">
                  <img src={cssLogo} alt="CSS" className="skill-icon" />
                  <p>CSS</p>
                </div>
                <div className="skill">
                  <img src={jsLogo} alt="JavaScript" className="skill-icon" />
                  <p>JavaScript</p>
                </div>
                <div className="skill">
                  <img src={reactLogo} alt="React" className="skill-icon" />
                  <p>React</p>
                </div>
                <div className="skill">
                  <img src={mysqlLogo} alt="MySQL" className="skill-icon" />
                  <p>MySQL</p>
                </div>
                <div className="skill">
                  <img src={awsLogo} alt="AWS" className="skill-icon" />
                  <p>AWS</p>
                </div>
                <div className="skill">
                  <img
                    src={officeLogo}
                    alt="Microsoft Office"
                    className="skill-icon"
                  />
                  <p>Microsoft Office</p>
                </div>
              </div>
            </div>
            <div className="modal-section" id="experience-section">
              <h2>Experience</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-icon"></div>
                  <div className="timeline-content">
                    <h3>Shellkode</h3>
                    <h4>Data Engineer (January 2024 – Present)</h4>
                    <ul>
                      <li>
                        Designed scalable data pipelines, managed database
                        systems, and ensured data integrity.
                      </li>
                      <li>
                        Facilitated data visualization using Metabase and Apache
                        Superset.
                      </li>
                      <li>
                        Proficient in Linux and AWS services: IAM, VPC, EC2, S3,
                        QuickSight.
                      </li>
                      <li>
                        Gained hands-on experience in data engineering
                        practices.
                      </li>
                      <li>
                        Developed responsive UIs with React.js and reusable
                        components.
                      </li>
                      <li>
                        Managed repositories with Git, collaborating with teams.
                      </li>
                      <li>
                        Worked with UI/UX designers for visually appealing
                        interfaces.
                      </li>
                      <li>
                        Resolved front-end bugs and used Jest for testing.
                      </li>
                      <li>
                        Continuously updated front-end development skills.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-section" id="projects-section">
              <h2>Latest Projects</h2>
              <div className="projects-container">
                <div className="project-card">
                  <img
                    src={project1}
                    alt="To-Do List"
                    className="project-image"
                  />
                  <div className="project-content">
                    <h3 className="project-title">To-Do List</h3>
                    <p className="project-category">Web Application</p>
                    <p className="project-description">
                      Developed an interactive To-Do application.
                    </p>
                    <a
                      href="https://superlative-treacle-19ea75.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [View the project]
                    </a>
                  </div>
                </div>
                <div className="project-card">
                  <img
                    src={project3}
                    alt="Google Gemini 2.0 Clone"
                    className="project-image"
                  />
                  <div className="project-content">
                    <h3 className="project-title">Google Gemini 2.0 Clone</h3>
                    <p className="project-category">Web Application</p>
                    <p className="project-description">
                      Built a clone of Google Gemini using React JS and Gemini
                      API.
                    </p>
                  </div>
                </div>
                <div className="project-card">
                  <img
                    src={project2}
                    alt="Movie Recommendation System"
                    className="project-image"
                  />
                  <div className="project-content">
                    <h3 className="project-title">
                      Movie Recommendation System
                    </h3>
                    <p className="project-category">Machine Learning</p>
                    <p className="project-description">
                      Implemented a machine learning-based recommendation system
                      to provide personalized movie suggestions.
                    </p>
                  </div>
                </div>
                <div className="project-card">
                  <img
                    src={project4}
                    alt="Sample Design"
                    className="project-image"
                  />
                  <div className="project-content">
                    <h3 className="project-title">Sample Design</h3>
                    <p className="project-category">Design</p>
                    <p className="project-description">
                      This design was created as a personal project to explore
                      creative ideas and enhance my skills.
                    </p>
                    <a
                      href="https://polite-zabaione-f54270.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [View the project]
                    </a>
                  </div>
                </div>
              </div>
              <div className="projects-button">
                <a href="#more-projects" className="see-more">
                  Let's See More
                </a>
              </div>
            </div>

            <div className="modal-section" id="contact-section">
              <h2>Contact</h2>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <img src={phoneIcon} alt="Phone" />
                  </div>
                  <div className="contact-details">
                    <h4>Phone</h4>
                    <p>8129266403</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <img src={emailIcon} alt="Email" />
                  </div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <p>
                      <a href="mailto:abhirampk577@gmail.com">
                        abhirampk577@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <img src={locationIcon} alt="Location" />
                  </div>
                  <div className="contact-details">
                    <h4>Location</h4>
                    <p>Bangalore, India</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <img src={linkedinIcon} alt="LinkedIn" />
                  </div>
                  <div className="contact-details">
                    <h4>LinkedIn</h4>
                    <p>
                      <a
                        href="https://www.linkedin.com/in/abhiram-p-k-276a771a5"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        linkedin.com/in/abhiram-p-k-276a771a5
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-heart-section">
              <p className="like-message-small">
                If you appreciate my design, your feedback would be valued.
                Please consider dropping a heart.
              </p>
              <div className="like-section-small" onClick={handleLike}>
                <span className={`small-heart ${liked ? "liked" : ""}`}>
                  ❤️
                </span>
                <span className="like-count-small">{likes}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
