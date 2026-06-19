import "../styles/Hero.css";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Lokesh Mendudala
      </motion.h1>

      <TypeAnimation
        sequence={[
          "Full Stack Developer",
          2000,
          "AI Engineer",
          2000,
          "Cloud Learner",
          2000,
          "Open Source Contributor",
          2000
        ]}
        speed={50}
        repeat={Infinity}
        className="typing"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="hero-buttons"
      >
        <a
          href="/lokesh-main-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>

        <a
          href="https://github.com/Lokesh9912210"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
}