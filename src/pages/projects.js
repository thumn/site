import React from "react";
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

const getLink = (record) => {
  return record.fields["Github"];
};

const Projects = () => {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    const fetchProjects = async () => {
      let canceled = false;
      const projects = await getProjects();
      if (!canceled) {
        console.log(projects);
        setProjects(projects);
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
            Here are some projects. haha. probs gonna include some filters here
            idk
          </p>
        </div>
        <div className="Page-right">
          <div className="Page-rightContent">
            <div className="Projects-projectCards">
              {projects.map((project) => {
                const name = getName(project);
                const desc = getDescription(project);
                const imgUrl = getImage(project);
                const tags = getTags(project);
                const github = getLink(project);
                return (
                  <ProjectCard
                    name={name}
                    desc={desc}
                    imgUrl={imgUrl}
                    tags={tags}
                    github={github}
                  />
                );
              })}
            </div>
          </div>
          <div style={{ height: 250 }}></div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
