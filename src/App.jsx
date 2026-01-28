import "./App.css";
import profile from "./assets/profile.jpg";
import helpdeskImg from "./assets/projects/helpdesk.png";
import coachfyImg from "./assets/projects/coachfy.png";
import aiImg from "./assets/projects/ai-support.png";


export default function App() {
  return (
    <div className="app">
      
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">

          <div className="hero-text">
            <p className="intro">Hello, I'm</p>
            <h1>Abdullah Neen</h1>
            <h2>Junior IT Specialist & Full-Stack Developer</h2>
            <p className="tagline">
              I build scalable systems, SaaS platforms and AI-powered solutions.
            </p>

          <div className="hero-buttons">
  <a
    href="https://www.linkedin.com/in/abdullah-neen-495a8829b"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>

  <a
    href="https://github.com/abdullahneen4-design"
    target="_blank"
    rel="noreferrer"
    className="secondary"
  >
    GitHub
  </a>

  <a
  href="https://mail.google.com/mail/?view=cm&to=abdullahneen4@gmail.com"
  target="_blank"
  rel="noreferrer"
  className="secondary"
>
  Email
</a>


</div>


          </div>

          <div className="hero-image">
            <img src={profile} alt="Abdullah Neen" />
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h3>About Me</h3>
        <div className="about-text">
          <p>
            I'm a Junior IT Specialist and Full-Stack Developer with strong hands-on
            experience in building real-world systems, SaaS platforms, and AI-powered
            applications.
          </p>

          <p>
            I enjoy solving technical problems, working close to users, and delivering
            practical, user-friendly IT solutions that create real business value.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills">
        <h3>Technical Skills</h3>

        <div className="skills-grid">
          <div className="skill-card">IT Support & Troubleshooting</div>
          <div className="skill-card">FastAPI & REST APIs</div>
          <div className="skill-card">React & Frontend Development</div>
          <div className="skill-card">SQL & Database Design</div>
          <div className="skill-card">AI Integration & LLM Systems</div>
          <div className="skill-card">Linux & System Administration</div>
          <div className="skill-card">SaaS Architecture</div>
          <div className="skill-card">UX & User-Centered Design</div>
        </div>

        
      </section>

      {/* EDUCATION & LEARNING */}
      <section className="education">
        <h3>Education & Technical Foundation</h3>

        <div className="edu-card">
          <div className="edu-icon">🎓</div>

          <h4>University of Borås</h4>
          <span>Bachelor of Computer Systems & Software Development</span>

          <p>
            During my studies, I built a strong foundation in <strong>software development,
            system design, UX principles, and IT support processes</strong>. I gained
            hands-on experience in <strong>Python, C#, web development, databases,
            system architecture, and user-centered design</strong>, working in agile,
            project-based teams.
          </p>

          <p>
            This background enables me to quickly understand complex systems,
            troubleshoot efficiently, and deliver <strong>practical, user-friendly IT solutions</strong>.
          </p>
        </div>
      </section>

      <section className="projects">
  <h3>Projects</h3>

  <div className="project-grid">

    <div className="project-card">
      <img src={helpdeskImg} alt="IT Helpdesk System" />
      <h4>IT Helpdesk & Ticketing System</h4>
      <p>
        Backend system for managing IT support workflows, ticket lifecycle,
        authentication, authorization, logging and analytics.
      </p>
      <span>FastAPI • SQLAlchemy • JWT • SQLite • REST API • Python</span>
    </div>

    <div className="project-card highlight">
      <img src={coachfyImg} alt="Coachfy AI SaaS Platform" />
      <h4>Coachfy — AI SaaS Platform</h4>
      <p>
        Full-stack AI-powered SaaS platform for online fitness coaches with
        automated training plans, dashboards and subscription billing.
      </p>
      <span>React • TypeScript • Supabase • Stripe • AI APIs</span>
    </div>

    <div className="project-card">
      <img src={aiImg} alt="AI IT Support Assistant" />
      <h4>AI IT Support Assistant</h4>
      <p>
        AI-powered troubleshooting assistant using local LLM inference and a
        modern real-time chat UI.
      </p>
      <span>FastAPI • React • Ollama • Llama 3 • REST API</span>
    </div>

  </div>
</section>


      {/* VALUE */}
      <section className="value-section">
        <h3>What I Can Bring</h3>

        <div className="value-grid">
          <div className="value-card">
            <span>⚡</span>
            <h4>Fast Learner</h4>
            <p>Quickly adapt to new systems, tools and workflows.</p>
          </div>

          <div className="value-card">
            <span>🛠</span>
            <h4>Problem Solver</h4>
            <p>Strong troubleshooting mindset with structured debugging approach.</p>
          </div>

          <div className="value-card">
            <span>🤝</span>
            <h4>User-Focused</h4>
            <p>Clear communication and strong customer support orientation.</p>
          </div>

          <div className="value-card">
            <span>🚀</span>
            <h4>Production Experience</h4>
            <p>Built real-world SaaS and AI-driven production systems.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
