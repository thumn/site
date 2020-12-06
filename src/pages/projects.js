import React from "react";
import Layout from "../components/Layout";
import "../stylesheets/page.css";
import "../stylesheets/text.css";

const Projects = () => {
  return (
    <Layout>
      <div className="Page-container">
        <div className="Page-left">
          <p className="header">Projects</p>
          <p className="body">
            Here are some projects that made me want to die
          </p>
        </div>
        <div className="Page-right">blah blah</div>
      </div>
    </Layout>
  );
};

export default Projects;
