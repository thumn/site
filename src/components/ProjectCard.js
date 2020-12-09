import Chip from "../components/Chip";
import { ReactComponent as GithubLogo } from "../img/github.svg";
import "../stylesheets/projectCard.css";

const ProjectCard = ({ name, desc, github, tags, imgUrl }) => {
  return (
    <div className="ProjectCard-container">
      <div className="ProjectCard-image">
        <img src={imgUrl} alt="" className="ProjectCard-img" />
      </div>
      <div className="ProjectCard-postImageContent">
        <div className="ProjectCard-nameAndLink">
          <div className="header2">{name}</div>
          {github && (
            <div className="github">
              <a href={github}>
                <GithubLogo height={20} />
              </a>
            </div>
          )}
        </div>
        <div className="ProjectCard-description body">{desc}</div>
        <div className="ProjectCard-tags">
          {tags.map((tag) => {
            return <Chip label={tag.toLowerCase()} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
