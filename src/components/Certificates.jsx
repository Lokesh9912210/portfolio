import "../styles/Certificates.css";

const certificates = [
  {
    title: "Build Your Own Static Website",
    link: "https://certificates.ccbp.in/academy/static-website?id=SEPAHQEYHT"
  },
  {
    title: "Build Your Own Responsive Website",
    link: "https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=UBDZXBQUCW"
  },
  {
    title: "Build Your Own Dynamic Website",
    link: "https://certificates.ccbp.in/academy/dynamic-web-application?id=HZQXCSTMID"
  },
  {
    title: "Programming Foundations",
    link: "https://certificates.ccbp.in/academy/programming-foundations-with-python?id=DXVKMFHXBO"
  },
  {
    title: "Introduction to Databases",
    link: "https://certificates.ccbp.in/academy/introduction-to-databases?id=QAWYIGAJCR"
  },
  {
    title: "Node.js",
    link: "https://certificates.ccbp.in/academy/node-js?id=DIDOLWWTEF"
  }
];

export default function Certificates() {
  return (
    <section id="certificates">
      <h2>Certifications</h2>

      <div className="certificate-grid">
        {certificates.map((certificate, index) => (
          <a
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-card"
            key={index}
          >
            <h3>{certificate.title}</h3>
            <p>View Certificate</p>
          </a>
        ))}
      </div>
    </section>
  );
}