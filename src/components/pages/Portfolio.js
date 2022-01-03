import React from "react";
import Result from "../layout/Result";
import { useState } from "react";

// Portfolio page
const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([
    {
      id: 1,
      title: "Netflix Landing Page",
      image: "portfolio-netflix.jpg",
      link: "https://github.com/AlexaIsaks/Recreate-Netflix",
      tags: ["HTML", "CSS", "SASS"],
    },
    {
      id: 2,
      title: "Book Review",
      image: "portfolio-book-review.jpg",
      link: "https://github.com/AlexaIsaks/Book-Review",
      tags: ["HTML", "CSS", "SASS", "JavaScript"],
    },
    {
      id: 3,
      title: "Multipage Website",
      image: "portfolio-multipage-website.jpg",
      link: "https://github.com/AlexaIsaks/Multipage-website",
      tags: ["HTML", "CSS", "SASS", "JavaScript", "jQuery"],
    },
    {
      id: 4,
      title: "Online CV",
      image: "portfolio-online-cv.jpg",
      link: "https://github.com/AlexaIsaks/MyCV",
      tags: ["HTML", "CSS", "SASS"],
    },
    {
      id: 5,
      title: "Hangman",
      image: "portfolio-hangman.jpg",
      link: "https://github.com/AlexaIsaks/hangman",
      tags: ["React", "Bootstrap", "SASS"],
    },
    {
      id: 6,
      title: "Dev Search",
      image: "portfolio-dev-search.jpg",
      link: "https://github.com/AlexaIsaks/dev-search",
      tags: ["React", "Bootstrap", "SASS", "Node.js", "Express"],
    },
    {
      id: 7,
      title: "Credential Management",
      image: "portfolio-credential-management.jpg",
      link: "https://github.com/AlexaIsaks/credential-management",
      tags: [
        "React",
        "Bootstrap",
        "SASS",
        "Node.js",
        "Express",
        "Mongoose",
        "MongoDB",
      ],
    },
  ]);

  return (
    <main className="site__main">
      <div className="portfolio">
        <section className="portfolio__introduction">
          <h1 className="portfolio__title">_Portfolio</h1>
          <h2 className="portfolio__subtitle">
            Some of the projects I have worked on
          </h2>
          <ul className="portfolio__filter-container">
            <li className="portfolio__filter">HTML</li>
            <li className="portfolio__filter">SASS</li>
            <li className="portfolio__filter">Bootstrap</li>
            <li className="portfolio__filter">JavaScript</li>
            <li className="portfolio__filter">jQuery</li>
            <li className="portfolio__filter">React</li>
            <li className="portfolio__filter">Express</li>
            <li className="portfolio__filter">Node.js</li>
            <li className="portfolio__filter">Clear</li>
          </ul>

          <p className="portfolio__description">
            My portfolio comprises of projects I completed during my studies
            that focus on specific exercises. The full list of technologies
            covered: HTML, CSS, SASS, Bootstrap, JavaScript, jQuery, React,
            Node.js, Express, MongoDB, PHP, SQL, Microsoft SQL Server, Java, Git
          </p>
        </section>

        {/*Projects*/}
        <section className="portfolio__results">
          <div className="porfolio__results-container">
            {portfolio.map((project) => {
              return (<Result key={project.id} project={project} />);
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Portfolio;
