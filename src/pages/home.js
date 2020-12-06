import React from "react";
import Layout from "../components/Layout";
import intro from "../img/intro.png";
import thu from "../img/thu-cartoon.jpg";
import "../stylesheets/home.css";

const Home = () => {
  return (
    <div>
      <Layout>
        <div className="container">
          <div className="thu">
            <img src={thu} alt="" />
          </div>
          <div className="rightContainer">
            <img src={intro} className="intro" alt="" />
            <p className="text">
              I graduated from UC Berkeley with a major in Cognitive Science and
              a minor in Computer Science in December 2019. I'm currently
              working as a software engineer at Samsara. In my free time, I
              enjoy playing Animal Crossing, writing snail mail to friends,
              going on photoshoots with friends, and doing Chloe Ting workout
              challenges!
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
