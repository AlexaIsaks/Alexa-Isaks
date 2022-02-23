import Github from "../../assets/images/icons/github-icon.svg";

// Portfolio result
const Result = ({ project }) => {
  return (
    <div className={`result ${project.tags.join(" ")}`}>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="result__link">
        <div className="result__image-container">
          <img
            src={
              require(`../../assets/images/portfolio/${project.image}`).default
            }
            alt={project.title}
            className="result__image"
          />
        </div>

        <div className="result__github-container">
          <img src={Github} alt="GitHub icon" className="result__github" />
          <p className="result__title">{project.title}</p>
        </div>
      </a>
    </div>
  );
};

export default Result;
