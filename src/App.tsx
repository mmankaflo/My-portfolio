import './App.css';
import thinkboardImg from './assets/images/thinkboard.png';
import recipeImg from './assets/images/recipe.jpg';
import codingImg from './assets/images/coding.png';
import webImg from './assets/images/web.png';
import aiFluencyImg from './assets/images/ai-fluency.png';
import pythonImg from './assets/images/python.jpg';
import javascriptImg from './assets/images/javascript.jpg';

function AboutMe() {
  return (
    <section className="section about-me" id="about">
      <h2>About Me</h2>
      <p>Hello, Welcome to my portfolio and workspace! I'm a passionate full-stack software developer with skills in creating responsive, high-performance web applications using modern technologies like React, Node.js, Express, MongoDB, and REST APIs to build beautiful and functional applications. 
        I bring ideas to life from front-end to back-end with clean code and a strong focus on user experience.
      </p>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills" id="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        <li className="skill-item">
          <span className="skill-icon" title="TypeScript">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#3178C6"/><path d="M17.5 22.5v-2.1c.6.3 1.2.5 1.8.5.7 0 1.1-.2 1.1-.6 0-.2-.1-.3-.3-.4-.2-.1-.7-.3-1.5-.5-1.2-.3-2-.6-2.4-1-.4-.4-.7-.9-.7-1.6 0-.6.2-1.1.7-1.5.5-.4 1.1-.6 2-.6.7 0 1.3.1 1.9.3v2c-.5-.2-1-.3-1.5-.3-.6 0-.9.2-.9.5 0 .2.1.3.3.4.2.1.7.3 1.5.5 1.2.3 2 .6 2.4 1 .4.4.7.9.7 1.6 0 .6-.2 1.1-.7 1.5-.5.4-1.2.6-2.1.6-.8 0-1.5-.1-2.1-.4zm-7.5-7.5h7v2h-2.5v7h-2v-7h-2.5v-2z" fill="#fff"/></svg>
          </span>
          <span className="skill-label">TypeScript</span>
        </li>
        <li className="skill-item">
          <span className="skill-icon" title="JavaScript">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#F7DF1E"/><path d="M19.7 22.2c.4.7.8 1.3 1.7 1.3.8 0 1.3-.3 1.3-1.6v-7.9h2.1v8c0 2.2-1.3 3.2-3.1 3.2-1.7 0-2.7-.9-3.2-2l1.2-.7zm-7.2.1c.3.6.6 1.1 1.4 1.1.7 0 1.1-.3 1.1-1.2v-7.8h2.1v7.9c0 2.1-1.2 3.1-3 3.1-1.6 0-2.6-.8-3.1-1.9l1.2-.7z" fill="#222"/></svg>
          </span>
          <span className="skill-label">JavaScript</span>
        </li>
        <li className="skill-item">
          <span className="skill-icon" title="React">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#222"/><g><circle cx="16" cy="16" r="2.5" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="2"><ellipse rx="10" ry="4.5" cx="16" cy="16"/><ellipse rx="10" ry="4.5" cx="16" cy="16" transform="rotate(60 16 16)"/><ellipse rx="10" ry="4.5" cx="16" cy="16" transform="rotate(120 16 16)"/></g></g></svg>
          </span>
          <span className="skill-label">React</span>
        </li>
        <li className="skill-item">
          <span className="skill-icon" title="HTML5">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#E44D26"/><path d="M8.5 6.5l2 18 5.5 1.5 5.5-1.5 2-18h-15zm11.1 5.2l-.2 2.1-.1 1.2h-7.7l.2 2.1h7.3l-.2 2.1h-7l.2 2.1h6.6l-.2 2.1-3.4.9-3.4-.9-.2-2.1h2.1l.1 1.1 1.4.4 1.4-.4.1-1.1h2.1l-.2 2.1-3.4.9-3.4-.9-.2-2.1h2.1l.1 1.1 1.4.4 1.4-.4.1-1.1h2.1z" fill="#fff"/></svg>
          </span>
          <span className="skill-label">HTML5</span>
        </li>
        <li className="skill-item">
          <span className="skill-icon" title="CSS3">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#1572B6"/><path d="M8.5 6.5l2 18 5.5 1.5 5.5-1.5 2-18h-15zm11.1 5.2l-.2 2.1-.1 1.2h-7.7l.2 2.1h7.3l-.2 2.1h-7l.2 2.1h6.6l-.2 2.1-3.4.9-3.4-.9-.2-2.1h2.1l.1 1.1 1.4.4 1.4-.4.1-1.1h2.1l-.2 2.1-3.4.9-3.4-.9-.2-2.1h2.1l.1 1.1 1.4.4 1.4-.4.1-1.1h2.1z" fill="#fff"/></svg>
          </span>
          <span className="skill-label">CSS3</span>
        </li>
        <li className="skill-item">
          <span className="skill-icon" title="Node.js">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#3C873A"/><path d="M16 6l8 4.6v9.2l-8 4.6-8-4.6V10.6L16 6zm0 2.2L9.3 11.5v8.9l6.7 3.8 6.7-3.8v-8.9L16 8.2zm1.2 10.7c0 .7-.4 1.2-1.2 1.2s-1.2-.5-1.2-1.2V13c0-.7.4-1.2 1.2-1.2s1.2.5 1.2 1.2v5.9z" fill="#fff"/></svg>
          </span>
          <span className="skill-label">Node.js</span>
        </li>
        <li className="skill-item">
          <span className="skill-icon" title="Git & GitHub">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#F05032"/><path d="M16 6a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm-1 3v2.1a2 2 0 0 0 0 3.8V21h2v-6.1a2 2 0 0 0 0-3.8V9h-2zm1 3.2a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6z" fill="#fff"/></svg>
          </span>
          <span className="skill-label">Git & GitHub</span>
        </li>
        <li className="skill-item">
          <span className="skill-icon" title="SQL">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#00758F"/><path d="M16 8c-4.418 0-8 1.79-8 4v8c0 2.21 3.582 4 8 4s8-1.79 8-4v-8c0-2.21-3.582-4-8-4zm0 2c3.314 0 6 1.343 6 3s-2.686 3-6 3-6-1.343-6-3 2.686-3 6-3zm0 12c-3.314 0-6-1.343-6-3v-2.197c1.319 1.09 3.769 1.697 6 1.697s4.681-.607 6-1.697V19c0 1.657-2.686 3-6 3z" fill="#fff"/></svg>
          </span>
          <span className="skill-label">SQL</span>
        </li>
        <li className="skill-item">
          <span className="skill-icon" title="AI Azure">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#008AD7"/><path d="M16 6l-7.5 20h3.1l1.7-4.5h7.4l1.7 4.5h3.1L16 6zm0 4.7l2.9 7.8h-5.8L16 10.7zm-2.1 9.8l2.1-5.6 2.1 5.6h-4.2z" fill="#fff"/><circle cx="24" cy="24" r="3" fill="#fff"/><circle cx="24" cy="24" r="2" fill="#008AD7"/></svg>
          </span>
          <span className="skill-label">AI Azure</span>
        </li>
        <li className="skill-item">
          <span className="skill-icon" title="AI Azure">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#008AD7"/><path d="MM16.002 6c-2.21 0-4.002 1.79-4.002 4v2h-4c-2.21 0-4 1.79-4 4v4c0 2.21 1.79 4 4 4h2v-2c0-1.104.896-2 2-2h8c1.104 0 2 .896 2 2v2h2c2.21 0 4-1.79 4-4v-4c0-2.21-1.79-4-4-4h-4v-2c0-2.21-1.79-4-3.998-4zm-2.002 2c0-1.104.896-2 2.002-2s2 .896 2 2v2h-4v-2zm-6 6h4v2c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2v-2h4v4c0 1.104-.896 2-2 2h-2v2c0 2.21-1.79 4-4 4s-4-1.79-4-4v-2h-2c-1.104 0-2-.896-2-2v-4zm7 8v2c0 1.104.896 2 2 2s2-.896 2-2v-2h-4z"fill="#fff"/><circle cx="24" cy="24" r="3" fill="#fff"/><circle cx="24" cy="24" r="2" fill="#008AD7"/></svg>
          </span>
          <span className="skill-label">Python</span>
        </li>
      </ul>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects" id="projects">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="project-card">
       <a 
        href="https://mern-notepad.onrender.com/" 
        target="_blank" rel="noopener noreferrer" 
        className="block rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300 bg-white">
          <img
            src={thinkboardImg}
            alt="Thinkboard"
            className="w-full h-auto rounded-md shadow-md"
            style={{
              marginTop: '1rem',
              maxWidth: '100%',
              width: '320px',
              borderRadius: '8px',
              boxShadow: '0 1px 4px rgba(100,108,255,0.07)'
            }}
          /> 
          <h3>Note Pad</h3>
          <p>Create, save, edit and delete your notes.</p>
        </a>
      </div>
      <div className="project-card">
        <a 
        href="https://drive.google.com/file/d/1i2V2bGmoFqJ7q-gAy-X5akwDOqfyG6mE/view" 
        target="_blank" rel="noopener noreferrer" 
        className="block rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300 bg-white">
          <img
            src={recipeImg}
            alt="Recipe Finder"
            className="w-full h-auto rounded-md shadow-md"
            style={{
              marginTop: '1rem',
              maxWidth: '100%',
              width: '320px',
              borderRadius: '8px',
              boxShadow: '0 1px 4px rgba(100,108,255,0.07)'
            }}
          /> 
          <h3>Recipe Finder</h3>
          <p>Sign up, find a recipe or search for one, get the ingredients and instructions, save to favorites, watch the tutorial and log out.</p>
          <span>View Project Demo</span>
        </a>
      </div>
      </div>
</section>
  );
}

function Certificates() {
  return (
    <section className="section certificates" id="certificates">
      <h2>Certificates</h2>
      <ul className="certificates-list">
        <li className="certificate-item">
          <span className="certificate-title">Introduction to coding</span>
          <img src={codingImg} alt="web development dertificate" className="certificate-img" style={{marginTop: '1rem', maxWidth: '100%', width: '320px', borderRadius: '8px', boxShadow: '0 1px 4px rgba(100,108,255,0.07)'}} />
          <span className="certificate-org">SheCodes</span>
        </li>
        <li className="certificate-item">
          <span className="certificate-title">Introduction to Web Development</span>
          <img src={webImg} alt="coding certificate" className="certificate-img" style={{marginTop: '1rem', maxWidth: '100%', width: '320px', borderRadius: '8px', boxShadow: '0 1px 4px rgba(100,108,255,0.07)'}} />
          <span className="certificate-org">SheCodes</span>
        </li>
        <li className="certificate-item">
          <span className="certificate-title">Introduction to Python</span>
          <img src={pythonImg} alt="coding certificate" className="certificate-img" style={{marginTop: '1rem', maxWidth: '100%', width: '320px', borderRadius: '8px', boxShadow: '0 1px 4px rgba(100,108,255,0.07)'}} />
          <span className="certificate-org">CodeFirstGirls</span>
        </li>
        <li className="certificate-item">
          <span className="certificate-title">Introduction to Javascript</span>
          <img src={javascriptImg} alt="coding certificate" className="certificate-img" style={{marginTop: '1rem', maxWidth: '100%', width: '320px', borderRadius: '8px', boxShadow: '0 1px 4px rgba(100,108,255,0.07)'}} />
          <span className="certificate-org">CodeFirstGirls</span>
        </li>
        <li className="certificate-item">
          <span className="certificate-title">AI Fluency Course</span>
          <span className="certificate-org">Microsoft</span>
          <img src={aiFluencyImg} alt="AI Fluency Course certificate" className="certificate-img" style={{marginTop: '1rem', maxWidth: '100%', width: '320px', borderRadius: '8px', boxShadow: '0 1px 4px rgba(100,108,255,0.07)'}} />
        </li>
        <li className="certificate-item">
          <span className="certificate-title">Full Stack Development</span>
          <span className="certificate-org">Power Learn Project</span>
          <span className="certificate-name">PENDING...</span>
        </li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <h2>Contact</h2>
      <p>Email: florencemmanka02gmail.com</p>
      <p>Contact No: +27 67 810 0789</p>
    </section>
  );
}

function SideProfile() {
  return (
    <aside className="side-profile">
      <div className="profile-emoji" aria-label="female face" role="img" style={{ fontSize: '5rem' }}>
        👩🏾
      </div>
      <div className="profile-name">Mmanka Florence Setseta</div>
      <div className="profile-location">South Africa, Limpopo</div>
      <div className="profile-links">
        <a href="https://github.com/mmankaflo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#181717" xmlns="http://www.w3.org/2000/svg"><path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.282 3.438 9.747 8.205 11.325.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.042-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.216.694.825.576C20.565 22.04 24 17.576 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/mmanka-setseta-bb71941a3/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg width="32" height="32" viewBox="0 0 448 512" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0c29.6 0 53.6 24.09 53.6 53.6 0 29.6-24 53.7-53.36 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.4s1.2-242.1 0-267.1h92.4v37.9c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.7 39.8 106.7 125.4V448z"/></svg>
        </a>
      </div>
    </aside>
  );
}

function App() {
  return (
    <div className="portfolio-layout">
      <SideProfile />
      <div className="portfolio-container">
        <header>
          <h1 style={{ fontSize: '5rem' }}>Software Developer</h1>
          <nav>
            <a href="#about">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certificates">Certificates</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-buttons">
            <a
              className="hire-me-btn"
              href="mailto:florencemmanka02@gmail.com?subject=Hiring%20Opportunity%20from%20Portfolio&body=Hi%20Florence%2C%20I%20am%20interested%20in%20hiring%20you.%20Please%20let%20me%20know%20your%20availability.%20"
            >
              Hire me
            </a>
            <a href="/cv.pdf" download className="download-cv-btn">Download my CV</a>
          </div>
        </header>
        <main>
          <AboutMe />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </main>
        <footer>
          <p>&copy; {new Date().getFullYear()} My Portfolio</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
