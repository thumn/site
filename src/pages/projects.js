import React from "react";
import ReactLoading from "react-loading";
import Chip, { ProjectTypes } from "../components/Chip";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import "../stylesheets/page.css";
import "../stylesheets/projects.css";
import "../stylesheets/text.css";

const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const AIRTABLE_BASE_KEY = process.env.REACT_APP_AIRTABLE_BASE_KEY;

var Airtable = require("airtable");
var base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_KEY);

const getProjects = async () => {
  return base("Projects")
    .select({
      view: "Grid view",
    })
    .all()
    .then((records) => {
      if (!records || records.length < 1) {
        return [];
      }
      return records;
    })
    .catch((err) => {
      throw err;
    });
};

const getName = (record) => {
  return record.fields["Name"];
};

const getDescription = (record) => {
  return record.fields["Description"];
};

const getImage = (record) => {
  return record.fields["Image"][0].url;
};

const getTags = (record) => {
  return record.fields["Tags"];
};

const getOrg = (record) => {
  return record.fields["Organization"];
};

const getDate = (record) => {
  return record.fields["Date"];
};

const getLink = (record) => {
  return record.fields["Link"];
};

const getGithub = (record) => {
  return record.fields["Github"];
};

const Projects = () => {
  const [allProjects, setAllProjects] = React.useState([]);
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const filterProjects = (projectType) => {
    setProjects(
      allProjects.filter((project) => getTags(project).includes(projectType))
    );
  };

  React.useEffect(() => {
    const fetchProjects = async () => {
      let canceled = false;
      setLoading(true);
      const projects = await getProjects();
      if (!canceled) {
        setProjects(projects);
        setAllProjects(projects);
        setLoading(false);
      }
      return () => {
        canceled = true;
      };
    };
    fetchProjects();
  }, []);

  React.useEffect(() => {
    document.body.className = "Page-body";
    return () => {
      document.body.className = "";
    };
  });

  return (
    <Layout>
      <div className="Page-container">
        <div className="Page-left">
          <p className="header">Projects</p>
          <p className="body">
            Here are some projects I've worked on in my student orgs and at
            hackathons!
          </p>
          <div>
            <Chip
              color={"#BC8DA0"}
              label={"all"}
              onClick={() => setProjects(allProjects)}
            />
            {Object.keys(ProjectTypes).map((type) => {
              return (
                <Chip
                  color={ProjectTypes[type]}
                  label={type}
                  onClick={() => filterProjects(type)}
                />
              );
            })}
          </div>
        </div>
        {loading ? (
          <div className="Page-loaderContainer">
            <div className="Page-loader">
              <ReactLoading type={"spin"} height={"20%"} color={"#E6DBB3"} />
            </div>
          </div>
        ) : (
          <div className="Page-right">
            <div className="Page-rightContent">
              <div className="Projects-projectCards">
                {projects.map((project) => {
                  const name = getName(project);
                  const desc = getDescription(project);
                  const imgUrl = getImage(project);
                  const tags = getTags(project);
                  const github = getGithub(project);
                  const link = getLink(project);
                  const org = getOrg(project);
                  const date = getDate(project);
                  return (
                    <ProjectCard
                      name={name}
                      desc={desc}
                      imgUrl={imgUrl}
                      tags={tags}
                      github={github}
                      link={link}
                      org={org}
                      date={date}
                    />
                  );
                })}
              </div>
            </div>
            <div style={{ height: 250 }}></div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Projects;
