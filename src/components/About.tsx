import React from "react";
import FadeIn from "./FadeIn";
import { useNavigate } from "react-router-dom";
import "../assets/styles/About.scss";

const About = () => {
  const navigate = useNavigate();
  const handleExploreWork = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/", { replace: false });
    setTimeout(() => {
      const el = document.getElementById("projects");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  return (
    <div className="about-page-container">
      <FadeIn transitionDuration={700}>
        <div className="about-card">
          <h1 className="about-title">Learn More About Me</h1>
          <p className="about-intro">
            I’m Sibtain — a technical product associate with a strong bias for building clarity in complex systems.
          </p>
          <p>
            Right now, I’m a Technical Product Associate at Aquila Engineering, where I’m helping automate internal tools, improve upstream visibility, and cut reporting time by 80%+ across field and IT teams. Previously, I worked at TechMecca (Lumeria), where I helped build dashboards and decision workflows that supported margin lift and vendor optimization.
          </p>
          <p>
            I’ve also worked independently as a real estate strategy consultant, designing tools to help agents and investors make faster, more informed decisions using ROI metrics, comp scoring, and workflow automation.
          </p>
          <hr />
          <FadeIn transitionDuration={600} delay={100}>
            <h2>What I’m Good At</h2>
            <ul className="about-list">
              <li>Turning messy processes into structured, trackable systems</li>
              <li>Thinking like an operator, but building like a product owner</li>
              <li>Communicating across both technical and non-technical teams</li>
              <li>Shipping clean MVPs that make people’s work easier</li>
            </ul>
          </FadeIn>
          <hr />
          <FadeIn transitionDuration={600} delay={200}>
            <h2>What I’m Interested In</h2>
            <ul className="about-list">
              <li>Internal tools and workflow platforms</li>
              <li>Strategy-backed product development</li>
              <li>Cross-functional ops in high-velocity environments</li>
              <li>Companies where execution is valued more than buzzwords</li>
            </ul>
          </FadeIn>
          <hr />
          <FadeIn transitionDuration={600} delay={300}>
            <h2>My Approach</h2>
            <p>
              I don’t wait to be told what to do; I figure out the problem, build something useful, and iterate until people actually want to use it. I’ve built dashboards, scoped product logic, and written SOPs in industries I had zero background in — because I care more about solving the problem than looking smart doing it.
            </p>
            <p>
              My goal is to keep pushing toward roles where I can own internal products, drive clarity, and build things that scale beyond myself.
            </p>
            <a
              className="about-work-link"
              href="/"
              onClick={handleExploreWork}
            >
              <button className="about-work-btn">Explore selected work →</button>
            </a>
          </FadeIn>
        </div>
      </FadeIn>
    </div>
  );
};

export default About; 