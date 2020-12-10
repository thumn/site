import Chip from "../components/Chip";
import { ReactComponent as GithubLogo } from "../img/github.svg";
import { ReactComponent as LinkLogo } from "../img/link.svg";
import "../stylesheets/projectCard.css";

const ProjectCard = ({ name, desc, github, tags, imgUrl, link, org, date }) => {
  return (
    <div className="ProjectCard-container">
      <div className="ProjectCard-image">
        <img src={imgUrl} alt="" className="ProjectCard-img" />
      </div>
      <div className="ProjectCard-postImageContent">
        <div className="ProjectCard-nameAndLink">
          <div className="header2">{name}</div>
          <div className="ProjectCard-links">
            {link && (
              <div className="ProjectCard-link">
                <a href={link} target="_blank" rel="noreferrer">
                  <LinkLogo height={20} />
                </a>
              </div>
            )}
            {github && (
              <div className="ProjectCard-link">
                <a href={github} target="_blank" rel="noreferrer">
                  <GithubLogo height={20} />
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="detail">
          {org} · {date}
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
