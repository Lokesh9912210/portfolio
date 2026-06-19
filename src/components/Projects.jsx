import { useState } from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "Career Pilot",
    summary:
      "An AI-powered career guidance platform that analyzes resumes, detects skill gaps, provides career roadmaps, and fetches jobs using Adzuna API.",
    tech: "Spring Boot, MySQL, Adzuna API",
    github: "https://github.com/Lokesh9912210"
  },
  {
    title: "JARVIS",
    summary:
      "An AI-powered study assistant application built using Python and AI APIs to help students with learning support.",
    tech: "Python, AI APIs",
    github: "https://github.com/Lokesh9912210",
    website: "https://lokesh9912-dinoai.hf.space/"
  },
  {
    title: "AI Resume Analyzer",
    summary:
      "An automated AI resume analyzer that calculates ATS score, analyzes resumes, and sends improvement suggestions directly to email.",
    tech: "Make.com, AI APIs",
    github: "https://github.com/Lokesh9912210",
    website: "https://t.me/Lokesh9912_bot"
  },
  {
    title: "TechOrbitPro",
    summary:
      "An e-commerce Shopify store for smart gadgets with product management and UI optimization. The Password for the admin panel is Test@123.",
    tech: "Shopify",
    website:"https://techorbitpro.myshopify.com/"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => setSelectedProject(project)}
          >
            <h3>{project.title}</h3>
            <p>Click to view details</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.summary}</p>
            <p>
              <strong>Tech:</strong> {selectedProject.tech}
            </p>

            {selectedProject.github && (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            )}

            {selectedProject.website && (
              <a
                href={selectedProject.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            )}

            <button onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}