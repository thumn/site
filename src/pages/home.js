import React from "react";
import Contact from "../components/contact";
import Layout from "../components/Layout";
import intro from "../img/intro.png";
import thu from "../img/thu-cartoon.jpg";
import "../stylesheets/home.css";
import "../stylesheets/text.css";

const Home = () => {
  return (
    <div className="Home-pageContainer">
      <Layout>
        <div className="Home-container">
          <div className="Home-thu">
            <img src={thu} alt="" title="art by @soresoar" />
          </div>
          <div className="Home-rightContainer">
            <img src={intro} alt="" />
            <p className="body">
              I graduated from UC Berkeley with a major in Cognitive Science and
              a minor in Computer Science in December 2019. I'm currently
              working as a software engineer at Samsara. In my free time, I
              enjoy listening to city pop and running!
            </p>
          </div>
        </div>
      </Layout>
      <Contact />
    </div>
  );
};

export default Home;
