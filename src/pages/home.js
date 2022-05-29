import Axios from "axios";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Contact from "../components/Contact";
import Layout from "../components/Layout";
import ducky from "../img/ducky.png";
import intro from "../img/intro.png";
import thu from "../img/thu-cartoon.jpg";
import "../stylesheets/home.css";
import "../stylesheets/text.css";

const socket = io("https://ducky-4.herokuapp.com/", { transports: ['websocket'] });

const moveDucky = () => {
  socket.send({ ducky_id: 1, location_id: 1 });
}

const Home = () => {
  const [showDucky, setShowDucky] = useState(false);

  // Get initial ducky location.
  useEffect(() => {
    Axios.get("https://ducky-4.herokuapp.com/").then(response => {
      setShowDucky(response.data[0].location_id === 2);
    }).catch(error => {
      console.log(error);
    })
  })

  // Get the ducky location whenever an "update" event occurs.
  // Show ducky on our page if location_id = 2.
  useEffect(() => {
    socket.on('update', (data) => {
      console.log("blah")
      if (data) {
        const parsedResponse = JSON.parse(data);
        console.log(parsedResponse[0], typeof (parsedResponse[0].location_id));
        setShowDucky(parsedResponse[0].location_id === 2);
      }
    });
  })

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
              enjoy playing Animal Crossing, writing snail mail to friends,
              going on photoshoots, and doing Chloe Ting workout challenges!
            </p>
          </div>
        </div>
      </Layout>
      <Contact />
      {showDucky && (
        <div className="Home-ducky">
          <img src={ducky} alt="" title="Move me to ducky-web.vercel.app!" onClick={moveDucky} />
        </div>)
      }
    </div>
  );
};

export default Home;
