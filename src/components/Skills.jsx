import "../styles/Skills.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Express.js",
  "React",
  "Node.js",
  "Java",
  "Python",
  "SQL",
  "Linux",
  "GitHub",
  "AI/LLM"
];

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}